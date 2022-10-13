import React from 'react';
import { GetServerSideProps } from 'next';
import { ICountry } from '../../components/Card';
import { numberWithCommas } from '../../utils/utils';
import ToggleTheme from '../../components/ToggleTheme';
import Link from 'next/link';
import Head from 'next/head';

type Data = ICountry & {
  subregion: string;
  nativeName: string;
  tld: string[];
  currencies: string;
  languages: string[];
  borders: string[];
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let resFetch;
  resFetch = await fetch(`https://restcountries.com/v3.1/name/${ctx.params?.name}`);

  let dataFetch = await resFetch.json();
  if (!dataFetch[0]?.currencies) {
    resFetch = await fetch(`https://restcountries.com/v3.1/alpha/${ctx.params?.name}`);
    dataFetch = await resFetch.json();
  }
  const data = dataFetch[0];

  let curr;
  for (let key in data.currencies) {
    curr = data.currencies[key];
  }
  let langs: string[] = [];
  for (let key in data.languages) {
    langs.push(data.languages[key]);
  }
  const countries: Data = {
    flags: data.flags.png,
    name: data.name.official,
    population: numberWithCommas(data.population),
    region: data.region,
    capital: data.capital || 'none',
    subregion: data.subregion || 'none',
    nativeName: data.name.common,
    tld: data.tld || [],
    currencies: curr.name,
    languages: langs || [],
    borders: data.borders || [],
  };

  return {
    props: {
      countries,
    },
  };
};

interface dataProps {
  countries: Data;
}

const Country = ({ countries }: dataProps) => {
  return (
    <div>
      <Head>
        <title>{countries.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-White dark:bg-DarkBlue dark:shadow-out">
        <div className="container px-4 lg:px-20 mx-auto flex items-center justify-between h-[80px] lg:h-20">
          <h1 className="text-VeryDarkBlue dark:text-VeryLightGray font-extrabold text-base lg:text-2xl">
            Where in the world?
          </h1>
          <ToggleTheme />
        </div>
      </header>
      <main className="container mx-auto px-4 lg:px-20">
        <Link href="../">
          <a className="shadow-out inline-block px-5 py-2 mt-8 text-xs lg:text-sm rounded-md bg-White dark:bg-DarkBlue text-DarkGray dark:text-VeryLightGray">
            <span className="pr-2 text-xl">←</span>Back
          </a>
        </Link>
        <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-14">
          <img src={countries.flags} alt={countries.name} className="w-full lg:w-[45%]" />
          <div className="lg:w-[45%]">
            <h1 className="font-extrabold text-xl mt-10 lg:mt-0 lg:text-3xl text-DarkBlue dark:text-VeryLightGray">
              {countries.name}
            </h1>
            <div>
              <div className="lg:flex lg:flex-row lg:justify-between mt-7">
                <div className="flex flex-col gap-2 lg:w-[45%]">
                  <p>
                    Native name: <span>{countries.nativeName}</span>
                  </p>
                  <p>
                    Population: <span>{countries.population}</span>
                  </p>
                  <p>
                    Region: <span>{countries.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{countries.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{countries.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 mt-10 lg:mt-0 lg:w-[45%]">
                  <p>
                    Top level Domain: <span>{countries.tld.join(', ')}</span>
                  </p>
                  <p>
                    Currencies: <span>{countries.currencies}</span>
                  </p>
                  <p>
                    Langueges: <span>{countries.languages.join(', ')}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-[10px] mt-10">
                <p className="min-w-max">Border Countries:</p>
                <ul className="flex gap-[10px] justify-center flex-wrap lg:justify-start">
                  {countries.borders.map((elem) => (
                    <li key={elem}>
                      <Link href={`/country/${elem}`}>
                        <a className="dark:shadow-out px-3 py-1 text-xs rounded bg-White dark:bg-DarkBlue text-DarkGray dark:text-VeryLightGray">
                          {elem}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Country;

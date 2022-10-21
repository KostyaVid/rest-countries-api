import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { ICountry } from '../components/Card';
import Cards, { IHomeProps } from '../components/Cards';
import ToggleTheme from '../components/ToggleTheme';
import { numberWithCommas } from '../utils/utils';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data: any[] = await res.json();
  const countries: ICountry[] = await data.map((elem) => {
    return {
      flags: elem.flags.png,
      name: elem.name.official,
      population: numberWithCommas(elem.population),
      region: elem.region,
      capital: elem.capital || 'none',
    };
  });

  return {
    props: {
      countries,
    }
  };
};

const Home = ({ countries }: IHomeProps) => {
  return (
    <div>
      <Head>
        <title>Where in the world</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-White dark:bg-DarkBlue dark:shadow-out">
        <div className="container px-4 md:px-20 mx-auto flex items-center justify-between h-[80px] md:h-20">
          <h1 className="text-VeryDarkBlue dark:text-VeryLightGray font-extrabold text-base md:text-2xl">
            Where in the world?
          </h1>
          <ToggleTheme />
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-20">
        <Cards countries={countries} />
      </main>
      <footer className="h-10 lg:h-20"></footer>
    </div>
  );
};

export default Home;

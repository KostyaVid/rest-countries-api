import Link from 'next/link';
import React from 'react';

export type ICountry = {
  flags: string;
  name: string;
  population: string;
  region: string;
  capital: string;
};

const Card = ({ flags, name, population, region, capital }: ICountry) => {
  return (
    <article className="overflow-hidden lg:w-[19%] md:w-[265px] md:mt-8 cursor-pointer bg-White dark:bg-DarkBlue  shadow-out rounded-md">
      <Link href={`/country/${name}`}>
        <a>
          <img src={flags} alt={name} className="w-full" />
          <div className="px-5 py-6">
            <h2 className="card__title">{name}</h2>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default Card;

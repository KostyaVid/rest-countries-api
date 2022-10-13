import React, { useEffect, useState } from 'react';

import Card, { ICountry } from './Card';

export interface IHomeProps {
  countries: ICountry[];
}
type Region = 'All' | 'Africa' | 'Americas' | 'Asia' | 'Europa' | 'Oceania';

const Cards = ({ countries }: IHomeProps) => {
  const [region, setRegion] = useState<Region>('All');
  const [name, setName] = useState('');
  const [countriesRegion, setCountriesRegion] = useState(countries);
  useEffect(() => {
    if (region === 'All') {
      setCountriesRegion(countries);
      return;
    }
    setCountriesRegion(
      countries.filter((elem) => elem.region.toUpperCase() === region.toUpperCase()),
    );
  }, [region]);

  useEffect(() => {
    if (name === '') {
      setCountriesRegion(countries);
      return;
    }
    setCountriesRegion(
      countries.filter((elem) => elem.name.toUpperCase().includes(name.toUpperCase())),
    );
  }, [name]);

  return (
    <div>
      <div className="mt-8 md:mt-11 flex flex-col md:flex-row md:justify-between">
        <label className="block relative">
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            className="dark:shadow-out w-full md:w-[380px] lg:w-[480px] text-xs md:text-sm font-semibold placeholder:font-semibold text-DarkGray placeholder:text-DarkGray dark:text-VeryLightGray placeholder:dark:text-VeryLightGray bg-White dark:bg-DarkBlue pl-16 pr-6 md:pr-9 py-4 rounded-md"
            type="text"
            placeholder="Search for a country..."
          />
          <svg
            className="w-4 fill-DarkGray dark:fill-VeryLightGray absolute left-6 top-4 md:top-[17px]"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </label>
        <select
          name="selectRegion"
          onChange={(event) => {
            setRegion(event.target.value as Region);
          }}
          className="dark:shadow-out border-[12px] border-White dark:border-DarkBlue max-w-max font-semibold text-DarkGray dark:text-VeryLightGray bg-White dark:bg-DarkBlue mt-8 md:mt-0 px-3 py-1 text-sm rounded-md">
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <section className="cards w-full mt-6 flex flex-col items-center md:flex-row md:flex-wrap md:justify-start md:items-start gap-9 md:gap-[8%]">
        {countriesRegion.map((elem) => (
          <Card {...elem} key={elem.name} />
        ))}
      </section>
    </div>
  );
};

export default Cards;

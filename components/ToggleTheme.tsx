import React, { useEffect } from 'react';
import { useState } from 'react';

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => {
    document.querySelector('html')?.classList.remove('dark');
  }, []);
  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark');
  }, [darkTheme]);

  return (
    <button
      onClick={() => {
        setDarkTheme(!darkTheme);
      }}
      type="button"
      className="text-VeryDarkBlue dark:text-VeryLightGray font-extrabold flex items-center">
      <svg
        className={[darkTheme ? 'hidden' : '', 'h-4 fill-White mr-2 md:mr-4'].join(' ')}
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        viewBox="0 0 384 512">
        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
      </svg>
      <svg
        className={[darkTheme ? '' : 'hidden', 'h-4 mr-1 md:mr-3'].join(' ')}
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path d="M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z" />
      </svg>
      Dark Mode
    </button>
  );
};

export default ToggleTheme;

import React from 'react';

const HeaderComponent = (props) => {
  return (
    <div class='lg:flex lg:items-center lg:justify-between dark:bg-gray-900 pb-3'>
      <div class='min-w-0 flex-1 '>
        <h2 class='text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight mx-10 mt-5 capitalize'>
          the first task
        </h2>
        <div class='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mx-10'>
          <div class='mt-2 flex items-center text-sm text-gray-500'>
            <svg
              class='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fill-rule='evenodd'
                d='M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z'
                clip-rule='evenodd'
              />
              <path d='M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z' />
            </svg>
            Fetching Data from another Site
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

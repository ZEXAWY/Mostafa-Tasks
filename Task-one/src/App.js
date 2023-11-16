// import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataDivcomponent from './Components/DataDivComponent/dataDivComponent';

function App() {
  return (
    <div className='h-screen flex flex-col items-center'>
      <h1 className='text-red-800 text-8xl shadow-lg rounded-lg  pt-10 w-fit text-center'>
        Task One
      </h1>

      <h2 className='text-4xl text-black capitalize pt-5 border-black border-b-4 text-center rounded-lg'>
        this is the first task
      </h2>
      <h3 className='text-xl p-2'>Fetching data from another site</h3>
      <DataDivcomponent />
    </div>
  );
}

export default App;

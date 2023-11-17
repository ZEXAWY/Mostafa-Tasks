// import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataDivcomponent from './Components/DataDivComponent/dataDivComponent';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className=' '>
      <Header />
      <div className='h-screen flex flex-col items-center'>
        <div className='shadow-md mt-10'>
          <p className='text-3xl font-bold relative shadow-sm'>
            The First Task
          </p>
        </div>

        <DataDivcomponent />
      </div>
    </div>
  );
}

export default App;

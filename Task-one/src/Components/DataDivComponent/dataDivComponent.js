import React, { useState, useEffect } from 'react';

function AlbumComponent() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/')
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-2xl text-center m-10'>
        <span className='w-fit bg-gradient-to-t from-gray-300 to-gray-50 p-3 rounded-md'>
          Albums
        </span>
      </h1>
      {/* <ul>
        {albums.map((album) => (
          <div className='border-black border-2 rounded-md m-2 p-2'>
            <li key={album.userId}>User ID: {album.userId}</li>
            <li key={album.id}>ID: {album.id}</li>
            <li key={album.id}>Title: {album.title}</li>
          </div>
        ))}
      </ul> */}
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='border border-gray-300 px-6 py-3'>UerID</th>
              <th className='border border-gray-300 px-6 py-3'>ID</th>
              <th className='border border-gray-300 px-6 py-3 text-center'>
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => (
              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='border border-gray-300 px-6 py-3  font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {album.userId}
                </td>
                <td className='border border-gray-300 px-6 py-3 text-center'>
                  {album.id}
                </td>
                <td className='border border-gray-300 px-6 py-3'>
                  {album.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlbumComponent;

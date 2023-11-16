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
      <h1 className='text-2xl text-center'>Albums</h1>
      {/* <ul>
        {albums.map((album) => (
          <div className='border-black border-2 rounded-md m-2 p-2'>
            <li key={album.userId}>User ID: {album.userId}</li>
            <li key={album.id}>ID: {album.id}</li>
            <li key={album.id}>Title: {album.title}</li>
          </div>
        ))}
      </ul> */}
      <table className='min-w-full border-collapse border border-gray-300'>
        <thead className=''>
          <tr>
            <td className='border border-gray-300 px-4 py-2'>UerID</td>
            <td className='border border-gray-300 px-4 py-2'>ID</td>
            <td className='border border-gray-300 px-4 py-2 text-center'>
              Title
            </td>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr>
              <td className='border border-gray-300 px-4 py-2 text-center'>
                {album.userId}
              </td>
              <td className='border border-gray-300 px-4 py-2 text-center'>
                {album.id}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {album.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlbumComponent;

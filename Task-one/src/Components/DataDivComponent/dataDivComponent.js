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
      <ul>
        {albums.map((album) => (
          <div className='border-black border-2 rounded-md m-2 p-2'>
            <li key={album.userId}>User ID: {album.userId}</li>
            <li key={album.id}>ID: {album.id}</li>
            <li key={album.id}>Title: {album.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AlbumComponent;

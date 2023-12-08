import React, { useState, useEffect } from 'react';

function RandomUserComponent() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserList(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-2xl text-center mb-4 mt-20'>
        Random Multiple Users Data
      </h1>
      <div className='flex flex-wrap justify-center'>
        {userList.map((userData, index) => (
          <div key={index} className='border p-4 m-4'>
            <img
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
              className='rounded-full mx-auto mb-2'
            />
            <p>
              Name:
              {`${userData.name.title}. ${userData.name.first} ${userData.name.last}`}
            </p>
            <p>Email: {userData.email}</p>
            <p>Gender: {userData.gender}</p>
            <p>
              Location:
              {`${userData.location.city}, ${userData.location.country}`}
            </p>
            <p>Age: {userData.dob.age}</p>
            <p>Phone: {userData.phone}</p>
            <p>ID: {userData.id.name}</p>
            <p>Nationality: {userData.nat}</p>
            <p>UserName: {userData.login.username}</p>
            <p>Password: {userData.login.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomUserComponent;

import { useState, useEffect } from 'react';

import React from 'react';

export const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://randomuser.me/api?results=20';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUsers(json.results);
        console.log(json.results);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>gender</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>photo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const { id, gender, name, email, picture } = user; // Object Destructuration
            return (
              <tr key={index}>
                <td>{id.value}</td>
                <td>{gender}</td>
                <th>{name.first}</th>
                <th>{name.last}</th>
                <th>{email}</th>
                <th>
                  <img src={picture.thumbnail} alt="picture" />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

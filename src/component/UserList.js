import React, { useState, useEffect } from 'react';
import { getAllUser } from '../api/index';

const UserList = (props) => {
  const { users = [], openUsers, setOpenUsers, selectedUsers, setSelectedUsers } = props;

  const processedData = users?.map((row) => ({
    id: row.id,
    login: row.login,
  }));

  const handleClick = (login) => {
    console.log('Click');
    console.log('Login : ', setSelectedUsers(login));
  };
  return (
    <div>
      <ul>
        {processedData &&
          processedData?.map((row) => {
            return (
              <li key={row.id}>
                <button onClick={() => handleClick(row.login)}>{row.login}</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default UserList;

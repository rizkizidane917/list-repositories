import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUser } from '../api/index';

const UserList = (props) => {
  const { users = [] } = props;
  const processedData = users?.map((row) => ({
    id: row.id,
    login: row.login,
  }));
  return (
    <div>
      <ul>
        {processedData &&
          processedData?.map((row) => {
            return (
              <li key={row.id}>
                <Link to={`/${row.login}/repos`}>{row.login}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default UserList;

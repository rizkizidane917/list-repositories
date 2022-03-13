import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {
  const { users = [] } = props;
  const processedData = users?.map((row) => ({
    id: row.id,
    login: row.login,
  }));
  return (
    <div>
      <ul className='px-5 leading-6 '>
        {processedData &&
          processedData?.map((row, i) => {
            return (
              <li className='text-lg' key={row.id}>
                {i + 1}. <Link to={`/${row.login}`}>{row.login}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default UserList;

import React, { useState, useEffect } from 'react';
import { getAllUser } from '../api/index';

const UserList = (props) => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setListUsers(await getAllUser());
    };
    fetchData();
  }, []);
  console.log(listUsers);
  return (
    <div>
      <ul>
        {listUsers &&
          listUsers?.map((data) => {
            return (
              <div>
                <li>
                  <button>{data.login}</button>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
export default UserList;

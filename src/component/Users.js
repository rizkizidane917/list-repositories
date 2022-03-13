import React, { useState, useEffect } from 'react';

import { getAllUser } from '../api/index';
import UserList from './UserList';

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setUsers(await getAllUser());
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>List Repositories</h1>
      <UserList setSelectedUsers={setSelectedUsers} users={users} setUsers={setUsers} />
    </div>
  );
};
export default Users;

import React, { useState, useEffect } from 'react';

import { getAllUser } from '../api/index';
import UserItem from './UserItem';
import UserList from './UserList';

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [openUsers, setOpenUsers] = useState(false);
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
      <UserList selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} users={users} setUsers={setUsers} />

      <UserItem setOpenUsers={setOpenUsers} openUsers={openUsers} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} users={users} setUsers={setUsers} />
    </div>
  );
};
export default Users;

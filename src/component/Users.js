import React, { useState, useEffect } from 'react';
import UserList from './UserList';

const Users = (props) => {
  const [openUsers, setOpenUsers] = useState(false);
  return (
    <div>
      <h1>List Repositories</h1>
      <UserList setOpenUsers={setOpenUsers} openUsers={openUsers} />
    </div>
  );
};
export default Users;

import React, { useState, useEffect } from 'react';

import { getAllUser } from '../api/index';
import UserList from './UserList';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setUsers(await getAllUser());
    };
    fetchData();
  }, []);
  return (
    <div className=' container-xl py-3 px-[40px] bg-white text-[#202020] font-Poppins'>
      <h1 className='md:text-2xl lg:text-3xl py-[30px] '>List Users Repositories : </h1>
      <UserList setSelectedUsers={setSelectedUsers} users={users} setUsers={setUsers} />
    </div>
  );
};
export default Users;

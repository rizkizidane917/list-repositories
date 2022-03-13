import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { getUserRepo } from '../api/index';

const UserItem = () => {
  const params = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const list = await getUserRepo(params.login);
    setUsers(list);
  };
  console.log('user', users);

  return (
    <div>
      <div>
        <Link to='/'>Home </Link>
        <img src={users.avatar_url} />
        <h2>Name : {users.full_name}</h2>
        <h2>Followers : {users.followers}</h2>
        <h2>Following : {users.following}</h2>
      </div>
    </div>
  );
};
export default UserItem;

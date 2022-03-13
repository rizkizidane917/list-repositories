import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { getRepo, getUserRepo } from '../api/index';

const UserItem = () => {
  const params = useParams();
  const [users, setUsers] = useState([]);
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const list = await getUserRepo(params.login);
    const repos = await getRepo(params.login);
    setUsers(list);
    setRepo(repos);
  };

  return (
    <div>
      <div>
        <Link to='/'>Home </Link>
        <img src={users.avatar_url} />
        <h2>Name : {users.name}</h2>
        <h2>Followers : {users.followers}</h2>
        <h2>Following : {users.following}</h2>
        <h2>Total Repo : {users.public_repos}</h2>
        {repo &&
          repo?.map((rows) => {
            return (
              <div key={rows.id}>
                <h2>Repo Name : {rows.full_name}</h2>
                <h2>{`${rows.private}` === false ? `Public` : 'Private'}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default UserItem;

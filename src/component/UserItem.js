import React, { useState, useEffect } from 'react';

const UserItem = () => {
  const [searchUser, setSearchUser] = useState('');
  const [users, setUsers] = useState([]);
  const URL = 'https://api.github.com/users';

  const handleClick = async (e) => {
    e.preventDefault();
    fetch(`${URL}/${searchUser}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers({
          imageUrl: data.avatar_url,
          name: data.name,
          followers: data.followers,
          following: data.following,
        });
      });
  };
  return (
    <div>
      <div>
        <form>
          <input type='search' name='searching' value={searchUser} onChange={(e) => setSearchUser(e.target.value)} />
          <button onClick={handleClick}>Search</button>
        </form>
        <img src={users.imageUrl} />
        <h2>Name : {users.name}</h2>
        <h2>Followers : {users.followers}</h2>
        <h2>Following : {users.following}</h2>
      </div>
    </div>
  );
};
export default UserItem;

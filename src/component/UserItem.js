import React, { useState, useEffect } from 'react';

const UserItem = (props) => {
  const { users, selectedUsers } = props;

  const [avatar_url, setAvatar_url] = useState('');
  const [login, setLogin] = useState('');
  const [followers, setfollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    const foundData = users?.find((row) => row?.login === selectedUsers);
    setAvatar_url(foundData?.avatar_url);
    setLogin(foundData?.login);
    setfollowers(foundData?.followers);
    setFollowing(foundData?.following);
  }, [users, selectedUsers]);

  console.log(users);

  return (
    <div>
      <div>
        <img src={avatar_url} />
        <h2>Name : {login} </h2>
        <h2>Followers : {followers} </h2>
        <h2>Following : {following} </h2>
        {/* <img src={users.imageUrl} />
        <h2>Name : {users.name}</h2>
        <h2>Followers : {users.followers}</h2>
        <h2>Following : {users.following}</h2> */}
      </div>
    </div>
  );
};
export default UserItem;

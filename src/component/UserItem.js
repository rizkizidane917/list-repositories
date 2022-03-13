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
    <div className='relative min-h-screen flex font-Poppins'>
      <div className='bg-[#202020] w-[25rem]  '>
        <div className=' py-5 px-5 text-white text-lg'>
          <Link to='/'>Back </Link>
        </div>
        <div className='fixed text-white max-w-sm flex items-center ml-[1.5rem] '>
          <div className='py-5 px-5 text-lg '>
            <img className='rounded-[100%] w-[150px] h-[150px] mx-auto ' src={users.avatar_url} />
            <div className='p-3'>
              <h2 className='text-lg font-semibold text-center py-2'>{users.name}</h2>
              <h2 className='text-md text-center'>{users.location}</h2>
              <h2 className='text-sm text-center'>@{users.twitter_username}</h2>
              <h2 className='text-sm text-center'>{users.blog}</h2>
              <div className='grid grid-cols-2 gap-3 py-4 px-5 text-center  '>
                <div className='bg-[#383838] py-2 px-5 rounded-lg  '>
                  <h2 className='text-sm'>Followers </h2>
                  <h2 className='text-sm'>{users.followers} </h2>
                </div>
                <div className='bg-[#383838] py-2 px-5 rounded-lg  '>
                  <h2 className='text-sm'>Following </h2>
                  <h2 className='text-sm'>{users.following} </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-2 mx-auto py-6'>
        <div className='grid grid-cols-3 gap-4'>
          {repo &&
            repo?.map((rows) => {
              return (
                <div key={rows.id}>
                  <div className=' border-solid border-2 border-black rounded-md px-2 py-2  '>
                    <h2 className='text-sm font-semibold py-1'>{rows.full_name}</h2>
                    <h3 className='text-sm py-1 '>{rows.name}</h3>
                    <h2 className='text-sm py-1 text-right  font-medium '>{`${rows.private}` === false ? `Public` : 'Private'}</h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default UserItem;

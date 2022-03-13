import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import arrow from '../assets/left.png';
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
    <div className='relative min-h-screen flex font-Poppins '>
      <div className='bg-[#202020] md:w-[26rem] w-[20rem] '>
        <div className=' fixed py-5 px-5 text-white text-lg'>
          <Link className='flex items-start' to='/'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='#557AFF' strokeWidth={2}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
            </span>{' '}
            <h2 className='text-[#557AFF] '>Back </h2>
          </Link>
        </div>

        <div className=' fixed text-white max-w-sm flex items-center my-20 md:ml-10 '>
          <div className='py-5 px-5 text-lg '>
            <img className='rounded-[100%] w-[120px] h-[120px] mx-auto ' src={users.avatar_url} />
            <div className='p-3'>
              <h2 className='text-md font-semibold text-center '>{users.name}</h2>
              <h2 className='text-sm text-center pb-2'>{users.twitter_username === null ? '' : `@${users.twitter_username}`}</h2>
              <h2 className='text-[10px] leading-4 text-center'>{users.bio}</h2>
              <div className='flex justify-center items-start gap-2'>
                <h2 className='text-[10px] text-center'>{users.location}</h2>
                <a className='text-[10px] text-center text-blue-400' href={`${users.blog}`}>
                  {users.blog !== null ? users.blog : ''}
                </a>
              </div>
              <div className='grid grid-cols-2 gap-2 py-2 px-2.5 text-center  '>
                <div className='bg-[#383838]  px-4 rounded-lg  '>
                  <h2 className='text-[10px]'>{users.followers} Followers </h2>
                </div>
                <div className='bg-[#383838]  px-4  rounded-lg  '>
                  <h2 className='text-[10px]'>{users.following} Following </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-2 mx-auto py-6'>
        <div className=' grid lg:grid-cols-3 grid-cols-1 lg:gap-4 md:grid-cols-2 md:gap-3 gap-2'>
          {repo &&
            repo?.map((rows) => {
              return (
                <div key={rows.id}>
                  <div className=' border-solid border-2 border-[#c4c4c4] rounded-md px-2 py-2   '>
                    <h2 className='md:text-sm text-[10px] font-semibold py-1 '>{rows.full_name}</h2>
                    <h3 className='md:text-sm text-[10px] py-1 '>{rows.name}</h3>
                    <h2 className='md:text-sm text-[10px] py-1 text-right  font-medium '>{`32${rows.private}` === false ? `Public` : 'Private'}</h2>
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

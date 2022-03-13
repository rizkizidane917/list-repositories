import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const getAllUser = async () => {
  try {
    const { data } = await axios.get(`${URL}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserRepo = async (username) => {
  await axios.get(`${URL}/${username}`);
};

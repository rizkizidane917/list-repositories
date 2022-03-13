import axios from 'axios';

const URL = 'https://api.github.com/users';

export const getAllUser = async () => {
  try {
    const { data } = await axios.get(`${URL}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserRepo = async (login) => {
  return await axios.get(`${URL}/${login}`).then((res) => res.data);
};
export const getRepo = async (login) => {
  return await axios.get(`${URL}/${login}/repos`).then((res) => res.data);
};

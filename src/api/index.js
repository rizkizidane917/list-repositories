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
  await axios.get(`${URL}/${login}`);
};

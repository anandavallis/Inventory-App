import axios from 'axios';
const BASE_URL = 'http://localhost:3001/products';

export const getProducts = async (query = '') => {
  const res = await axios.get(`${BASE_URL}?q=${query}`);
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}?category=${category}`);
  return res.data;
};

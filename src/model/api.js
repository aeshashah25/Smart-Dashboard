import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
  } catch {
    return null;
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products/categories`);
    return res.data;
  } catch {
    return [];
  }
};
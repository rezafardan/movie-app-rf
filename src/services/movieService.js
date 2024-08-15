import axios from "axios";

const API_URL = "https://66ad757fb18f3614e3b531b5.mockapi.io/movies";

export const getMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createMovie = async (movieData) => {
  const response = await axios.post(API_URL, movieData);
  return response.data;
};

export const updateMovie = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

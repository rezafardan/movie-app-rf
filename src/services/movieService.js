import axiosIstance from "../axiosConfig";

export const getMovies = async () => {
  const response = await axiosIstance.get("/");
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axiosIstance.get(`/${id}`);
  return response.data;
};

export const createMovie = async (movieData) => {
  const response = await axiosIstance.post("/", movieData);
  return response.data;
};

export const updateMovie = async (id, updatedData) => {
  const response = await axiosIstance.put(`/${id}`, updatedData);
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await axiosIstance.delete(`/${id}`);
  return response.data;
};

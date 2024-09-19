import axiosIstance from "../axiosConfig";

export const getMovies = async () => {
  const response = await axiosIstance.get("/movies");
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axiosIstance.get(`/movie/${id}`);
  return response.data;
};

export const createMovie = async (movieData) => {
  const response = await axiosIstance.post("/movie", movieData);
  return response.data;
};

export const updateMovie = async (id, updatedData) => {
  const response = await axiosIstance.put(`/movie/${id}`, updatedData);
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await axiosIstance.delete(`/movie/${id}`);
  return response.data;
};

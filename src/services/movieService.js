import axiosIstance from "../axiosConfig";

export const getMovies = async (query = "", token) => {
  const response = await axiosIstance.get(query, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMovieById = async (id, token = "") => {
  const response = await axiosIstance.get(`/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createMovie = async (movieData, token = "") => {
  const response = await axiosIstance.post("/movie", movieData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateMovie = async (id, updatedData, token) => {
  const response = await axiosIstance.put(`/movie/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteMovie = async (id, token) => {
  const response = await axiosIstance.delete(`/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

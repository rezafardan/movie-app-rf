import axiosIstance from "../axiosConfig";

export const uploadFileService = async (file) => {
  const formData = new FormData();
  const token = localStorage.getItem("token");
  formData.append("file", file);

  const response = await axiosIstance.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

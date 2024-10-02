import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../../services/fileUploadSlice";
import "./Profile.css";
import defaultAvatar from "../../assets/profile-img.png";
import SubscribeCards from "../SubscribeCards/SubscribeCards";
import upload_outline from "../../assets/file_upload_outline.svg";

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const dispatch = useDispatch();

  const { uploading, success, error, uploadedFileName } = useSelector(
    (state) => state.fileUpload
  );

  const user = useSelector((state) => state.user);

  useEffect(() => {
    // Set the profile image based on the uploaded file name or default avatar
    if (uploadedFileName) {
      setProfileImage(`http://localhost:7001/uploads/${uploadedFileName}`);
    }
  }, [uploadedFileName, user]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Validasi tipe file
    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar");
      return;
    }

    // Validasi ukuran file
    if (file.size > 2 * 1024 * 1024) {
      // 2MB
      alert("Ukuran file tidak boleh lebih dari 2MB");
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      dispatch(uploadFile(selectedFile));
    }
  };

  return (
    <div className="profile">
      <h2>Profil Saya</h2>
      <div className="ctr">
        <div className="profile-avatar">
          <div className="container-avatar">
            <img className="profile-img" src={profileImage} alt="Profile" />
            <div className="btn-ubah">
              <input type="file" onChange={handleFileChange} />
              <button
                className="ubah"
                onClick={handleUpload}
                disabled={uploading}
              >
                Ubah Foto
              </button>
              {success && <p>File uploaded successfully!</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {uploadedFileName && (
                <div>
                  <p>Gambar Anda:</p>
                  <img
                    src={`http://localhost:7001/uploads/${uploadedFileName}`}
                    alt="Uploaded"
                    style={{ width: "100px", height: "auto" }} // Atur ukuran gambar
                  />
                  <p>
                    <a
                      href={`http://localhost:7001/uploads/${uploadedFileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lihat Gambar
                    </a>
                  </p>
                </div>
              )}
              <p>
                <img src={upload_outline} alt="" />
                Maksimal 2MB
              </p>
            </div>
          </div>
          <div className="profile-frame">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nama Pengguna"
                value={user ? user.username : ""} // Cek apakah user ada
                readOnly // Membuat input hanya bisa dibaca
              />
              <input
                type="text"
                placeholder="Email"
                value={user ? user.email : ""} // Cek apakah user ada
                readOnly // Membuat input hanya bisa dibaca
              />
            </form>
          </div>
        </div>
        <div>
          <SubscribeCards />
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../../slices/fileUploadSlice";
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
    if (uploadedFileName) {
      setProfileImage(`http://localhost:7001/uploads/${uploadedFileName}`);
    }
  }, [uploadedFileName, user]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
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
    <div className="mt-24 px-[5%] flex flex-col">
      <h2 className="font-normal mb-8">Profil Saya</h2>
      <div className="flex justify-between gap-[5%] mb-10">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center gap-6">
            <img className="w-24 h-24" src={profileImage} alt="Profile" />
            <div className="flex flex-col gap-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="bg-transparent"
              />
              <button
                className="py-2 px-3 rounded-3xl border cursor-pointer"
                onClick={handleUpload}
                disabled={uploading}
              >
                Ubah Foto
              </button>
              {success && <p>Berhasil mengirim file</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {uploadedFileName && (
                <div>
                  <p>Gambar Anda:</p>
                  <img
                    src={`http://localhost:7001/uploads/${uploadedFileName}`}
                    alt="Uploaded"
                    style={{ width: "100px", height: "auto" }}
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
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Nama Pengguna"
                value={user ? user.username : ""}
                readOnly
                className="h-12 bg-transparent rounded-full border px-5 text-white text-base font-light"
              />
              <input
                type="text"
                placeholder="Email"
                value={user ? user.email : ""}
                readOnly
                className="h-12 bg-transparent rounded-full border px-5 text-white text-base font-light"
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

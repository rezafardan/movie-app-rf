import React from "react";
import "./Profile.css";
import profile from "../../assets/profile-img.png";
import SubscribeCards from "../SubscribeCards/SubscribeCards";
import upload_outline from "../../assets/file_upload_outline.svg";

const Profile = () => {
  return (
    <div className="profile">
      <h2>Profil Saya</h2>
      <div className="ctr">
        <div className="profile-avatar">
          <div className="container-avatar">
            <img className="profile-img" src={profile} alt="" />
            <div className="btn-ubah">
              <button className="ubah">Ubah Foto</button>
              <p>
                <img src={upload_outline} alt="" />
                Maksimal 2MB
              </p>
            </div>
          </div>
          <div className="profile-frame">
            <form>
              <input type="text" placeholder="Nama Pengguna" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Kata Sandi" />
            </form>
            <button className="ubah simpan">Simpan</button>
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

import React from "react";
import "./Profile.css";
import logo from "../../assets/logo.png";
import SubscribeCards from "../SubscribeCards/SubscribeCards";

const Profile = () => {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <div>
        <img src={logo} alt="" />
        <button>Ubah Foto</button>
        <p>Maksimal 2MB</p>
      </div>
      <form className="profile-frame">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <button>Simpan</button>
      <SubscribeCards />;
    </div>
  );
};

export default Profile;

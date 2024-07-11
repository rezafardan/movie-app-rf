import React from "react";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import MyList from "./components/MyList/MyList.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Profile/Profile.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mylist" element={<MyList />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

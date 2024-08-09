import React from "react";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import MyList from "./components/MyList/MyList.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Profile/Profile.jsx";
import FilmPage from "./components/FilmPage/FilmPage.jsx";
import NewMovie from "./components/NewMovie/NewMovie.jsx";
import EditMovie from "./components/EditMovie/EditMovie.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
            </>
          }
        />

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
          path="/film"
          element={
            <>
              <Navbar />
              <FilmPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/add-movie"
          element={
            <>
              <Navbar />
              <NewMovie />
              <Footer />
            </>
          }
        />

        <Route
          path="/edit-movie"
          element={
            <>
              <Navbar />
              <EditMovie />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

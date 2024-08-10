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

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/film" element={<FilmPage />} />
                <Route path="/mylist" element={<MyList />} />
                <Route path="/add-movie" element={<NewMovie />} />
                <Route path="/edit-movie" element={<EditMovie />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

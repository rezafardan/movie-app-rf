import Home from "./pages/Home/Home.jsx";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import RouteProtect from "./services/RouteProtect.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import Navbar from "./components/AtomicComponent/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Profile/Profile.jsx";
import NewMovie from "./components/NewMovie/NewMovie.jsx";
import MovieData from "./components/EditMovie/MovieData.jsx";
import FormEditMovie from "./components/EditMovie/FormEditMovie.jsx";
import NotFound from "./pages/NotFound.jsx";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        element={
          <RouteProtect>
            <Layout />
          </RouteProtect>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<NewMovie />} />
        <Route path="/moviedata" element={<MovieData />} />
        <Route path="/formedit/:id" element={<FormEditMovie />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

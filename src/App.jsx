import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./components/AtomicComponent/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Profile/Profile.jsx";
import NewMovie from "./components/NewMovie/NewMovie.jsx";
import MovieData from "./components/EditMovie/MovieData.jsx";
import FormEditMovie from "./components/EditMovie/FormEditMovie.jsx";

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
                <Route path="/add-movie" element={<NewMovie />} />
                <Route path="/moviedata" element={<MovieData />} />
                <Route path="/formedit/:id" element={<FormEditMovie />} />
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

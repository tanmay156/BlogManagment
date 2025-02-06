import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import View from "./Components/View";
import EditPost from "./Components/EditPost";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./App.css";
import { Toaster } from "react-hot-toast";

function LogoutButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  if (location.pathname === "/" || location.pathname === "/signup") {
    return null;
  }

  return (
    <button
      className="btn btn-danger position-absolute top-0 end-0 m-3"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

function Header() {
  return (
    <header className="header-container text-center mx-5 my-4 py-2 shadow-lg">
      <h1 className="fw-bold">PT Blogs</h1>
      <img src="/images.jpeg" alt="PT Blogs Logo" className="header-logo" />
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-2 mt-3 mx-2 my-1" style={{borderRadius: 8}}>
      © PT Software Technologies Pvt Ltd, Nashik
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Toaster/>
    <Router>
      <div
        className="app-container d-flex flex-column min-vh-100"
        style={{ background: "linear-gradient(to right, #f8f9fa, #e9ecef)" }}
      >
        <Header />
        <div className="container mt-4 flex-grow-1 position-relative">
          <LogoutButton />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/view" element={<View />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

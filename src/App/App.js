import Home from './../Home/Home';
import About from './../About/About';
import Login from './../Login/Login';
import Navbar from './../Navbar/Navbar';
import Movies from './../Movies/Movies';
import Register from './../Register/Register';
import Notfound from './../Notfound/Notfound';
import { Route, Routes, useNavigate } from "react-router-dom";
import Bgheader from '../Bgheader/Bgheader';
import Youtube from './../Youtube/Youtube';
import {useState} from "react"
import jwtDecode from 'jwt-decode';
import Tvshows from "../Tvshows/Tvshows";
import ProtectedRoutes from './../ProtectedRoutes/ProtectedRoutes';
import { MovieContextProvider } from '../MovieContext/MovieContext';
import Details from './../Details/Details';
import Profile from './../Profile/Profile';
import Footer from './../Footer/Footer';


function App() {

const navigate = useNavigate();
const [userData, setUserData] = useState(
  localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")) : null
  // null error why ? 
)

const getUserData = () => {
  let token = localStorage.getItem("token")
  let objData = jwtDecode(token);
  setUserData(objData);
}

const logout = () => {
  localStorage.removeItem("token")
  setUserData(null)
  navigate("/login")
}

  return (
    <>
    <Navbar userData={userData} logout={logout}/>
    <Bgheader />
      <div className="container">
        <MovieContextProvider userData={userData}>
          <Routes>
            <Route element={<ProtectedRoutes userData={userData}/>}>
              <Route path="/" element={<Home />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="youtube" element={<Youtube />}></Route>
              <Route path="movies" element={<Movies />}></Route>
              <Route path="tv" element={<Tvshows />}></Route>
              <Route path="details" element={<Details userData={userData}/>}></Route>
              <Route path="profile" element={<Profile userData={userData}/>}></Route>
            </Route>
            <Route path="login" element={<Login  getUserData={getUserData}/>}/>
            <Route path="register" element={<Register />}/>
            <Route path="*" element={<Notfound />}/>
          </Routes>
        </MovieContextProvider>
      </div>
     {userData?  <Footer /> : ""}
    </>
  );
}

export default App;

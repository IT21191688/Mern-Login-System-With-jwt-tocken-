import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import FogotPassword from './components/FogotPassword'
import ResetPassword from './components/ResetPassword'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSideRegister from './components/AdminSideRegister';
import ChangePass from './components/ChangePass';
import Profile from './components/Profile';
function App() {


  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(localStorage.getItem('role') ? localStorage.getItem('role') : "");

  })


  return (
    <>
      <div className="App">

        <ToastContainer autoClose={3000} />
        <NavBar />

        {
          user == "admin" ? (

            <Router>
              <Routes>
                <Route exact path='/adminHome' element={<AdminHome />} />
                <Route exact path="/adminRegister" element={<AdminSideRegister />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/resetPassword' element={<ResetPassword />} />

              </Routes>
            </Router>

          ) : user == 'user' ? (


            <Router>

              <Routes>

                <Route exact path='/userHome' element={<UserHome />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/resetPassword' element={<ResetPassword />} />

              </Routes>

            </Router>


          ) : null

        }


        <Router>
          <Routes>

            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/fogotPassword' element={<FogotPassword />} />
            <Route exact path='/changePassword/:email' element={<ChangePass />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;

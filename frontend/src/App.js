import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import Reset from './components/Reset'
import ResetPassword from './components/ResetPassword'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSideRegister from './components/AdminSideRegister';
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

              </Routes>
            </Router>

          ) : user == 'user' ? (


            <Router>

              <Routes>

                <Route exact path='/userHome' element={<UserHome />} />

              </Routes>

            </Router>


          ) : null

        }


        <Router>
          <Routes>

            <Route exact path='/resetPassword' element={<ResetPassword />} />

            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/reset' element={<Reset />} />
            <Route exact path='/resetPassword' element={<ResetPassword />} />
            <Route exact path="/readSalary" element={<ResetPassword />} />


          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;

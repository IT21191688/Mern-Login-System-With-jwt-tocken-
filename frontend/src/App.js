import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import Reset from './components/Reset'
import ResetPassword from './components/ResetPassword'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">


        { /*<Login />*/}
        { /* <Reset />*/}




        <Router>
          <Routes>

            <Route exact path='/' element={<Login />} />
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

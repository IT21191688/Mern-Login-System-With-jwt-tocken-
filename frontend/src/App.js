import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {

    path: '/signup',
    element: <SignUp />

  },
  {
    path: '/login',
    element: <Login />
  },
  {

    path: '/recovery',
    element: <Recovery />

  },
  {
    path: '/reset',
    element: <Reset />
  }
  ,
  {
    path: '*',
    element: <PageNotFound />
  }

])


function App() {
  return (
    <>

      <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;

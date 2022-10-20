import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Layout/Home';
import Register from './Layout/Register';
import Login from './Layout/Login';
import PrivetRoutes from './Routes/PrivetRoutes';
import Oders from './Components/Oders';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <PrivetRoutes><Home></Home></PrivetRoutes>
        },
        {
          path: "/orders",
          element: <PrivetRoutes> <Oders></Oders></PrivetRoutes>
        },
        {
          path: "/home",
          element: <PrivetRoutes><Home></Home></PrivetRoutes>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

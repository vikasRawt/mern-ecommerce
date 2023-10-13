import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Cart } from './features/cart/Cart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element:<SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element:<Cart></Cart>,
  },
]);

function App() {
  return (
    <div className="App ">
<RouterProvider router={router} />
    </div>
  );
}

export default App;

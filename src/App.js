import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductDetailPage from './pages/productDetailPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';

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
    element:<CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element:<CheckOut></CheckOut>,
  },
  {
    path: "/pdetail",
    element:<ProductDetailPage></ProductDetailPage>,
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

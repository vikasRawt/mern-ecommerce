import React from 'react';
import Navbar from '../features/navbar/Navbar';
import Product from '../features/product_list/productList';

function Home() {
  return (
    <div>
      <Navbar>
        <Product></Product>
      </Navbar>
    </div>
  );
}

export default Home;

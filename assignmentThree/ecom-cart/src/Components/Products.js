import React from 'react';
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';

const Products = () => {
  return (
    <div className='py-16'>
      <div className='productWrapper'>
        <ShowProduct/>
        <AddProduct/>
      </div>
    </div>
  );
};

export default Products;
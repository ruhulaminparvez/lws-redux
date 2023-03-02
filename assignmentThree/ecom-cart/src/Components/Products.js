import React from 'react';
import AddProductAndBill from './AddProductAndBill';
import ShowProductAndCart from './ShowProductAndCart';


const Products = () => {
  return (
    <div className='py-16'>
      <div className='productWrapper'>
        <AddProductAndBill/>
        <ShowProductAndCart/>
      </div>
    </div>
  );
};

export default Products;
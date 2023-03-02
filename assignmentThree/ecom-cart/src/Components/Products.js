import React from 'react';
import AddProductAndCart from './AddProductAndCart';
import ShowProductAndBill from './ShowProductAndBill';



const Products = () => {
  return (
    <div className='py-16'>
      <div className='productWrapper'>
        <AddProductAndCart/>
        <ShowProductAndBill/>
      </div>
    </div>
  );
};

export default Products;
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productSlice';

const AddProductAndCart = () => {
  const [productName, setProductName] = React.useState('');
  const [productCategory, setProductCategory] = React.useState('');
  const [productImage, setProductImage] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const [productQuantity, setProductQuantity] = React.useState('');
  const dispatch = useDispatch();

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const newProduct = { productName, productCategory, productImage, productPrice, productQuantity };
    console.log(newProduct);
    dispatch(addProduct(newProduct));
  }

  return (
    <>
        {/*  Product Input Form */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/*  product name */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input className="addProductInput" id="lws-inputName" type="text" required onChange={(e) => { setProductName(e.target.value) }} />
            </div>
            {/*  product category */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input className="addProductInput" id="lws-inputCategory" type="text" required onChange={(e) => { setProductCategory(e.target.value) }}/>
            </div>
            {/*  product image url */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input className="addProductInput" id="lws-inputImage" type="text" required onChange={(e) => { setProductImage(e.target.value) }}/>
            </div>
            {/*  price & quantity container */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/*  price */}
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input className="addProductInput" type="number" id="lws-inputPrice" required onChange={(e) => { setProductPrice(e.target.value) }}/>
              </div>
              {/*  quantity */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input className="addProductInput" type="number" id="lws-inputQuantity" required onChange={(e) => { setProductQuantity(e.target.value) }}/>
              </div>
            </div>
            {/*  submit button */}
            <button type="submit" id="lws-inputSubmit" className="submit"
            onClick={(e) => {handleProductSubmit(e)}}>Add Product</button>
          </form>
        </div>
        {/*  Product Input Form Ends */}

        {/*  cart container */}
        <div className="space-y-6">
          {/*  Cart Item */}
          <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
              {/*  cart image */}
              <img className="lws-cartImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
              {/*  cart item info */}
              <div className="space-y-2">
                <h4 className="lws-cartName">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop</h4>
                <p className="lws-cartCategory">Men's clothing</p>
                <p>BDT <span className="lws-cartPrice">1100</span></p>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
              {/*  amount buttons */}
              <div className="flex items-center space-x-4">
                <button className="lws-incrementQuantity">
                  <i className="text-lg fa-solid fa-plus"></i>
                </button>
                <span className="lws-cartQuantity">2</span>
                <button className="lws-decrementQuantity">
                  <i className="text-lg fa-solid fa-minus"></i>
                </button>
              </div>
              {/*  price */}
              <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">2200</span></p>
            </div>
            {/*  delete button */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
              <button className="lws-removeFromCart">
                <i className="text-lg text-red-400 fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          {/*  Cart Items Ends */}
        </div>
        {/* cart container ends */}
    </>
  );
};

export default AddProductAndCart;
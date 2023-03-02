import React from 'react';

const ShowProductAndBill = () => {
  return (
    <>
      {/*  products container */}
      <div className="productContainer" id="lws-productContainer">
        {/* product item */}
        <div className="lws-productCard">
          <img className="lws-productImage" src="https://i.dummyjson.com/data/products/59/thumbnail.jpg" alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">Spring and summershoes</h4>
            <p className="lws-productCategory">Mens shoes</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">400</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">10</span></p>
            </div>
            <button className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
        {/*  product item ends */}

        {/*  product item */}
        <div className="lws-productCard">
          <img className="lws-productImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">Women Winter Clothes</h4>
            <p className="lws-productCategory">Tops</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">100</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">30</span></p>
            </div>
            <button className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
        {/*  product item ends */}
      </div>
      {/* products container ends */}

      {/*  Bill Container */}
      <div>
        <div className="billDetailsCard">
          <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
          <div className="space-y-4">
            {/*  sub total  */}
            <div className="flex items-center justify-between">
              <p>Sub Total</p>
              <p>BDT <span className="lws-subtotal">8800</span></p>
            </div>
            {/*  Discount  */}
            <div className="flex items-center justify-between">
              <p>Discount</p>
              <p>BDT <span className="lws-discount">0</span></p>
            </div>
            {/*  VAT  */}
            <div className="flex items-center justify-between">
              <p>VAT</p>
              <p>BDT <span className="vat">0</span></p>
            </div>
            {/*  Total  */}
            <div className="flex items-center justify-between pb-4">
              <p className="font-bold">TOTAL</p>
              <p className="font-bold">BDT <span className="lws-total">8800</span></p>
            </div>
            <button className="placeOrderbtn">place order</button>
          </div>
        </div>
      </div>
      {/*  Bill Container Ends */}
    </>
  );
};

export default ShowProductAndBill;
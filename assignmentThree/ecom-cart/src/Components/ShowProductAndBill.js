import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/cartSlice";

const ShowProductAndBill = () => {
  const products = useSelector((state) => state.product.products);
  const showContent = useSelector((state) => state.showContent.showContent);
  const dispatch = useDispatch();

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        console.log(product);
        dispatch(addToCart(product));
    }

  return (
    <>
      {showContent ? <div>
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
          </div> : <div className="productContainer" id="lws-productContainer">
        {
          products.length > 0 ? products.map((product, idx) => {
            return (
                <div className="lws-productCard" key={idx+1}>
                  <img className="lws-productImage" src={product.productImage} alt={product.productName} />
                  <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{product.productName}</h4>
                    <p className="lws-productCategory">{product.productCategory}</p>
                    <div className="flex items-center justify-between pb-2">
                      <p className="productPrice">BDT <span className="lws-price">{product.productPrice}</span></p>
                      <p className="productQuantity">QTY <span className="lws-quantity">{product.productQuantity}</span></p>
                    </div>
                    <button className="lws-btnAddToCart"
                    onClick={(e) => handleAddToCart(e, product)}
                    >Add To Cart</button>
                  </div>
                </div>
            )
          }) : <h1>No Product Found</h1>
        }
      </div>}

    </>
  );
};

export default ShowProductAndBill;
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { mobileDetails, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Update cart data when cartItems change
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            modelName: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  // Calculate total cost properly
  useEffect(() => {
    let total = 0;
    for (const item of cartData) {
      const productData = mobileDetails.find(
        (product) => product.modelName === item.modelName
      );
      if (productData) {
        total += item.quantity * productData.price;
      }
    }
    setTotalCost(total);
  }, [cartData, mobileDetails]);

  return (
    <div className='cart-item-container'>
      <h1 className='cart-title'>Cart</h1>
      <div>
        {cartData.map((item, index) => {
          const productData = mobileDetails.find(
            (product) => product.modelName === item.modelName
          );

          if (!productData) return null; // Skip if product not found

          return (
            <div key={index} className='cart-items'>
              <div className='c'>
                <img src={productData.imgSrc} alt={productData.modelName} />
                <div className='c1'>
                  <p>{productData.companyName}</p>
                  <p>{productData.modelName}</p>
                  <h2>Price: ${productData.price}</h2>
                </div>
                <div className='c2'>
                  <input
                    type='number'
                    readOnly
                    className='cart-count'
                    min={1}
                    value={item.quantity}
                  />
                  <button className='remove'>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Displaying Total Cost */}
      <div className='cart-total'>
        <p>Total Cost: ${totalCost}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

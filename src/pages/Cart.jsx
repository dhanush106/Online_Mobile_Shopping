import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const {mobileDetails,cartItems} = useContext(ShopContext);
  const [cartData,setCartData] = useState([]);
  useEffect(()=>{
    const tempData = [];
    for (const items in cartItems){
      for (const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({modelName:items,size: item,quantity:cartItems[items][item]})
        }
      }
    }
    setCartData(tempData);
  },[cartItems])

  return (
    <div className='cart-item-container'>
      <h1 className='cart-title'>Cart</h1>
      <div>
        {
          cartData.map((item,index) => {
            const productData = mobileDetails.find((product)=> product.modelName === item.modelName);
            console.log(productData)
            return (
              <div key={index} className='cart-items'>
                <div className='c'>
                  <img src={productData.imgSrc} alt="" />
                  <div className='c1'>
                    <p>{productData.companyName}</p>
                    <p>{productData.modelName}</p>
                    <h2>Price : $ {productData.price}</h2>
                  </div>
                  <div className="c2">
                    <input type="number" readOnly="True" className='cart-count' mim={1} defaultValue={item.quantity} />
                    <button className='remove'>Remove</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const {productid} = useParams();
  const {mobileDetails,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false)
  const fetchProductData = async () => {

    mobileDetails.map((item)=>{
      if (item.modelName === productid){
        setProductData(item)
        return null;
      }
    })
  }
  
  useEffect(()=>{
    fetchProductData();
  },[productid])

  return (
    <div className='product-data'>
      <div className="img">
        <img src={productData?.imgSrc} alt={productData?.modelName}/>
      </div>
      <div className="product-details">
        <h1>{productData.companyName}</h1>
        <h2>{productData.modelName}</h2>
        <p>Price: ${productData.price}</p>
        <p>RAM: {productData.ram}</p>
        <p>Storage: {productData.storage}</p>
        <p>Screen Size: {productData.screenSize}</p>
        <p>Battery: {productData.battery}</p>
        <p>Operating System: {productData.os}</p>
        <div className="product-buttons">
          <button onClick={()=>addToCart(productData.modelName)}>Add to Cart</button>
          <button>Add to Wishlist</button>
        </div>

      </div>
    </div>
  )
}

export default Product

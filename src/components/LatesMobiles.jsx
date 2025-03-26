import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const LatesMobiles = () => {
    const {mobileDetails} = useContext(ShopContext)
    const [latestMobile,setLatestMobiles] = useState([]);
    useEffect(()=>{
        setLatestMobiles(mobileDetails.slice(0,10));
    },[])
  return (
    <div className='latest'>
      {latestMobile.map((item)=>(
        <ProductItem 
          img={item.imgSrc}
          company={item.companyName}
          series={item.modelName}
          price={item.price}
          os={item.os}
        />
      ))}
    </div>
  )
}

export default LatesMobiles;
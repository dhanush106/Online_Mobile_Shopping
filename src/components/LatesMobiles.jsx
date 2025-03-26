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
            img = {item.imgSrc}
            company = {item.companyName}
            series = {item.seriesName}
            price={item.price}
        />
      ))}
    </div>
  )
}

export default LatesMobiles;
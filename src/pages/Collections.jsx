import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem';

const Collections = () => {

  const {mobileDetails} = useContext(ShopContext);
  const [searchValue,setSearchValue] = useState("");
  function handleChange(e){
    setSearchValue(e.target.value);
  }
  return (
    <div>
      <div className="searcher">
        <input onChange={handleChange} value={searchValue} type="text"/>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="collection">
        {
        mobileDetails.map((item) =>(
          searchValue.toLowerCase() === item.companyName.toLowerCase() || searchValue === ""?
            <ProductItem 
              img={item.imgSrc}
              company={item.companyName}
              series={item.modelName}
              price={item.price}
          />:null
        ))}
      </div>
    </div>
    
  )
}

export default Collections;

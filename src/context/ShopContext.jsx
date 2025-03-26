import { createContext, useEffect, useState } from "react"
import mobileDetails from "../assets/mobile_data_200_regenerated";

export const ShopContext =createContext();

const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee = 10;
    
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (modelName,size) => {
        let cartData = structuredClone(cartItems);
        
        

        if(cartData[modelName]){
            if (cartData[modelName][size]){
                cartData[modelName][size]+=1;
            }else{
                cartData[modelName][size] = 1;
            }
        }
        else{
            cartData[modelName] = {};  // create new model entry
            cartData[modelName][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount=()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for (const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }
    
    const value = {
        mobileDetails ,currency,delivery_fee,cartItems,
        addToCart,getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
import React from "react";
import "./ProductItem.css";
import {Link} from "react-router-dom"
const ProductItem = (props ) => {
  return (
    <Link className='p' to={`/product/${props.series}`}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div 
            className="flip-card-front" 
            style={{ backgroundImage: `url(${props.img})` }}
          >
          </div>
          <div className="flip-card-back">
              <h2>{props.company}</h2>
              <h2>{props.series}</h2>
              <p>{props.os}</p>
              <h2>Price : $ {props.price}</h2>
              <div className="buttons">
                  <button>Add to Cart</button>
                  <button>View Details</button>
              </div>
          </div>
          
        </div>
      </div>
    </Link>
    
  );
};

export default ProductItem;


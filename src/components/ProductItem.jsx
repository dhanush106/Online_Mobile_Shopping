import React from 'react'
import {Link} from 'react-router-dom';
const ProductItem = (props) => {
  return (
    <Link className='p' to={`/product/${props.series}`}>
        <div className='product-item'>
            <div className="image">
                <img src={props.img} alt="###" />
            </div>
            <div className="description">
                <h2>{props.company}</h2>
                <h2>{props.series}</h2>
                <h2>Price : $ {props.price}</h2>
                <div className="buttons">
                    <button>Add to Cart</button>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ProductItem;

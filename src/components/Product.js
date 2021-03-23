import React from 'react'

const Product = (props) => {
    const {product, onAdd} = props;
    return (
        <div>
         <img className="small" src={product.image} alt={product.name}></img>
         <h3>{product.name}</h3>
         <div>${product.price}</div>
         <button onClick={()=>onAdd(product)}>Add To Cart</button>   
        </div>
    )
}

export default Product

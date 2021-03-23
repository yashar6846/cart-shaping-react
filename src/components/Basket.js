import React from 'react'

const Basket = (props) => {
    const { cartItems, onAdd, onRemove } = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 0.14
    const ShoppingPrice = itemsPrice > 200 ? 0 : 50
    const totalPrice = itemsPrice + taxPrice + ShoppingPrice
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() =>onAdd(item)} className="add">+</button>
                        <button onClick={() =>onRemove(item)} className="add">-</button>
                    </div>
                    <div className="col-2 text-right" > 
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="row">
                  <div className="col-2">Item Price</div>
                  <div className="col-1n text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-2">Tax Price</div>
                  <div className="col-1n text-right">${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-2">Shopping Price</div>
                  <div className="col-1n text-right">${ShoppingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-2"><strong>Total Price</strong></div>
                  <div className="col-1n text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                  </div>
                  <hr />
                  
                  <div className="row">
                  <button onClick={() => alert('Implement Checkout')}>Checkout</button>
                  </div>
             
                </>
            )}
        </aside>
    )
}

export default Basket

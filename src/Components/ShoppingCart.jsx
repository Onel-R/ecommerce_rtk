import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
import './ShoppingCart.css'; 

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const total = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    const handleRemoveItem = itemId => {
        dispatch(removeItemFromCart(itemId));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const handleIncreaseQuantity = itemId => {
        dispatch(increaseItemQuantity(itemId));
    }
    const handleDecreaseQuantity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
    }
  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
       
      </ul>
      <button className="clear-cart-btn">Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;

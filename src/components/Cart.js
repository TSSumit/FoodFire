import store from '../utils/Storage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartItem from '../utils/CartItem';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice=useSelector((store)=> store.cart.price);
  console.log(cartItems+" "+totalPrice);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <p>This is a cart component!</p>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total Price: {totalPrice}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
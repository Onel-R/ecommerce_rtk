import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    useEffect(() => {
        if(total > 400) {
            setSuperCoins(40);
        } else if(total > 300) {
            setSuperCoins(30);
        } else if(total > 200) {
            setSuperCoins(20);
        } else if(total > 100) {
            setSuperCoins(10);
        } else {
            setSuperCoins(0);
        }
    }, [total]);

    return (
        <div className="super-coins" style={{textAlign:'center'}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
    );
}

export default SuperCoin;
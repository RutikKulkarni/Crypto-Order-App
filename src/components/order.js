import React, { useState } from 'react';
import './order.css';

const Order = () => {
  const [btcPrice] = useState(2500);
  const [dogePrice] = useState(30);
  const [ripplePrice] = useState(250);
  const [btcQuantity, setBtcQuantity] = useState(0);
  const [dogeQuantity, setDogeQuantity] = useState(0);
  const [rippleQuantity, setRippleQuantity] = useState(0);
  const [myorder, setmyorder] = useState(null);

  const calcuTotalAm = (price, quantity) => {
    return price * quantity;
  };
  const handleOrderClick = () => {
    const btcTotal = calcuTotalAm(btcPrice, btcQuantity);
    const dogeTotal = calcuTotalAm(dogePrice, dogeQuantity);
    const rippleTotal = calcuTotalAm(ripplePrice, rippleQuantity);
    const totalPrice = btcTotal + dogeTotal + rippleTotal;

    const myorder = `My Order:
      BTC: ${btcQuantity} x $${btcPrice} = $${btcTotal}
      Doge: ${dogeQuantity} x $${dogePrice} = $${dogeTotal}
      Ripple: ${rippleQuantity} x $${ripplePrice} = $${rippleTotal}
      Total Price: $${totalPrice}
    `;

    setmyorder(myorder);
  };

  return (
    <div className="app-container">
      <div className="container">
        <div className="box">
          <h2>BTC</h2>
          <p className="price">Price: ${btcPrice}</p>
          <input
            className="quantity-input"
            type="number"
            value={btcQuantity}
            onChange={(e) => setBtcQuantity(e.target.value)}
          />
        </div>

        <div className="box">
          <h2>Doge</h2>
          <p className="price">Price: ${dogePrice}</p>
          <input
            className="quantity-input"
            type="number"
            value={dogeQuantity}
            onChange={(e) => setDogeQuantity(e.target.value)}
          />
        </div>

        <div className="box">
          <h2>Ripple</h2>
          <p className="price">Price: ${ripplePrice}</p>
          <input
            className="quantity-input"
            type="number"
            value={rippleQuantity}
            onChange={(e) => setRippleQuantity(e.target.value)}
          />
        </div>
      </div>

      <button className="order-button" onClick={handleOrderClick}>
        Order
      </button>

      {myorder && <div className="my-order">{myorder}</div>}
    </div>
  );
};

export default Order;

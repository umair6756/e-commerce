import React, { useContext } from 'react'
import './CartWishlest.css'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products-data.json'
import { CartContext } from './CartContext'
import { useState } from 'react'

const AddToCart = () => {

  const { cart, removeFromCart, totalPrice,shipping,setShipping,calculateProductPrice,setCart,increament,decreament,count} = useContext(CartContext);
 

  const handleRemove = (index) => {
    removeFromCart(index)
  }

  // const decreament = (index) => {
  //    const updateCart = [...cart];
  //    if(updateCart[index].quantity>1){
  //     updateCart[index].quantity -=1;
  //    }

  //    setCart(updateCart)
  // };
  // const increament = (index) => {
  //   const updateCart = [...cart];
  //   if(updateCart[index].quantity>1){
  //     updateCart[index].quantity += 1;
  //   }

  //   setCart(updateCart)
  // }

  return (
    <div>
      <div className="Add-To-Cart">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className=" row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className=" shopping-length col align-self-center text-right text-muted">
                  {cart.length} items
                </div>
              </div>
            </div>


            {cart.map((item, index) => (
              <div key={index} className="row border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img className="img-fluid" src={item.image} />


                  </div>
                  <div className="col">
                    <div className="row text-muted">{item.category}</div>
                    <div className="row">{item.name}</div>
                  </div>
                  <div className="col">
                    <button onClick={decreament}>-</button>
                    <span className="border">
                        {count}
                    </span>
                    <button onClick={increament}>+</button>
                  </div>

                  <div className="col">
                  {item.onSale ? (
                                      
                                      <span>{item.price - (item.price * item.sale / 100).toFixed(2)}</span>
                                      
                                ): item.price}

                  </div>
                  <div className='col'>
                    <button className="close" onClick={() => { handleRemove(index) }}>✕</button>
                  </div>
                </div>
              </div>
            ))}



            <div className="back-to-shop">
              <Link to="/product">←</Link>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>

          
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className=" row">
              <div className="col" style={{ paddingLeft: 0 }}>
               Items {cart.length}
              </div>
              <div className="col text-right">{calculateProductPrice()}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select className='delivery-select' value={shipping} onChange={(e) => setShipping(e.target.value)}>
                <option className="text-muted " value="free"> Free-Delivery</option>
                <option className="text-muted" value="standard">Standard-Delivery(200) </option>
                <option className="text-muted" value="express">Standard-Delivery (300)</option>

              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" className='cuppon-input' />
            </form>
            <div
              className="row"
              style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">{totalPrice(shipping)}</div>
            </div>
            <Link to='/checkout' className="checkBtn">CHECKOUT</Link>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default AddToCart

















// import React, { useEffect, useState } from 'react';

// const AddToCart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart); // Load cart from localStorage
//   }, []);

//   return (
//     <div>
//       <h4>Shopping Cart</h4>
//       {cart.length > 0 ? (
//         cart.map((item, index) => (
//           <div key={index}>
//             <h5>{item.name}</h5>
//             <img src={item.image} alt={item.name} />
//             <p>Price: €{item.discountPrice}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products in the cart.</p>
//       )}
//     </div>
//   );
// };

// export default AddToCart;















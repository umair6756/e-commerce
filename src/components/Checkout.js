import React, { useContext } from 'react'
import './Checkout.css'
import { CartContext } from './CartContext'
import { HeroSection } from './Buttons';


const Checkout = () => {

    const { cart, calculateProductPrice } = useContext(CartContext);
    return (
        <>
        <HeroSection heroBackground="checkout-hero"/>
        <div className='checkout'>
            

            <h2 className='text-center my-5'>Checkout Form</h2>
            {/* <div className='checkout-div'>
                <div className="checkout-row">
                    <div className="col-75">
                        <div className="checkout-container">
                            <form action="/action_page.php">
                                <div className=" checkout-row">
                                    <div className="col-50">
                                        <h3 className='my-4'>Billing Address</h3>
                                        <label htmlFor="fname">
                                            <i className="fa fa-user" /> Full Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="firstname"
                                            placeholder="Your name"
                                            className='checkoutInput'
                                        />
                                        <label htmlFor="email">
                                            <i className="fa fa-envelope" /> Email*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className='checkoutInput'
                                        />
                                        <label htmlFor="adr">
                                            <i className="fa-solid fa-address-card" /> Address*
                                        </label>
                                        <input
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Enter your address"
                                            className='checkoutInput'
                                        />
                                        <label htmlFor="city">
                                            <i className="fa fa-institution" /> City*
                                        </label>
                                        <input type="text" id="city" name="city" placeholder="Enter your city" className='checkoutInput' />
                                        <div className="checkout-row">
                                            <div className="col-50">
                                                <label htmlFor="state">State</label>
                                                <input type="text" id="state" name="state" placeholder="MH" className='checkoutInput' />
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="zip">Zip</label>
                                                <input type="number" id="zip" name="zip" placeholder={400001} className='checkoutInput' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-50">
                                        <h3 className='my-4'>Payment</h3>
                                        <label htmlFor="fname">Accepted Cards</label>
                                        <div className="icon-container">
                                            <i className="fa-brands fa-cc-visa" style={{ color: "navy" }} />
                                            <i className="fa-brands fa-cc-amex" style={{ color: "blue" }} />
                                            <i className="fa-brands fa-cc-mastercard" style={{ color: "red" }} />
                                            <i className="fa-brands fa-cc-discover" style={{ color: "orange" }} />
                                        </div>
                                        <label htmlFor="cname">Name on Card</label>
                                        <input
                                            type="text"
                                            id="cname"
                                            name="cardname"
                                            placeholder="Name"
                                            className='checkoutInput'
                                        />
                                        <label htmlFor="ccnum">Credit card number</label>
                                        <input
                                            type="number"
                                            id="ccnum"
                                            name="cardnumber"
                                            placeholder="1111-2222-3333-4444"
                                            className='checkoutInput'
                                        />
                                        <label htmlFor="expmonth">Exp Month</label>
                                        <input
                                            type="text"
                                            id="expmonth"
                                            name="expmonth"
                                            placeholder="December"
                                            className='checkoutInput'
                                        />
                                        <div className="checkout-row">
                                            <div className="col-50">
                                                <label htmlFor="expyear">Exp Year</label>
                                                <input
                                                    type="number"
                                                    id="expyear"
                                                    name="expyear"
                                                    placeholder={2027}
                                                    className='checkoutInput'
                                                />
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder={123} className='checkoutInput' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label>
                                    <input type="checkbox" defaultChecked="checked" name="sameadr" />{" "}
                                    Shipping address same as billing
                                </label>
                                <button
                                type="submit"
                                defaultValue="Continue to checkout"
                                className="btn"
                                >
                                 Place Order
                                </button>




                            </form>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="checkout-container">
                            <h4 className='my-4'> 
                                <span>Cart</span>
                                <span className="price" style={{ color: "#C19A6B" }}>
                                    <i className="fa fa-shopping-cart" /> <b>{cart.length}</b>
                                </span>
                            </h4>

                            {cart.map((prod, index) => (
                                <p>
                                    <span href="#">{prod.name}</span> <span className="price">{prod.discountPrice}</span>
                                </p>
                            ))}

                            <hr />
                            <p>
                                Total{" "}
                                <span className="price" style={{ color: "black" }}>
                                    <b>{calculateProductPrice()}</b>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}



            <main className='w-100'>

                <section class="checkout-form">
                    <form action="#!" method="get">
                        <h6>Contact information</h6>
                        <div class="form-control " style={{border:"none"}}>
                            <label for="checkout-email">E-mail</label>
                            <div>
                                <span class="fa fa-envelope"></span>
                                <input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email..." />
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="checkout-phone">Phone</label>
                            <div>
                                <span class="fa fa-phone"></span>
                                <input type="tel" name="checkout-phone" id="checkout-phone" placeholder="Enter you phone..." />
                            </div>
                        </div>
                        <br></br>
                        <h6>Shipping address</h6>
                        <div class="form-control">
                            <label for="checkout-name">Full name</label>
                            <div>
                                <span class="fa fa-user-circle"></span>
                                <input type="text" id="checkout-name" name="checkout-name" placeholder="Enter you name..." />
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="checkout-address">Address</label>
                            <div>
                                <span class="fa fa-home"></span>
                                <input type="text" name="checkout-address" id="checkout-address" placeholder="Your address..." />
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="checkout-city">City</label>
                            <div>
                                <span class="fa fa-building"></span>
                                <input type="text" name="checkout-city" id="checkout-city" placeholder="Your city..." />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-control">
                                <label for="checkout-country">Country</label>
                                <div>
                                    <span class="fa fa-globe"></span>
                                    <input type="text" name="checkout-country" id="checkout-country" placeholder="Your country..." list="country-list" />
                                    <datalist id="country-list">
                                        <option value="India"></option>
                                        <option value="USA"></option>
                                        <option value="Russia"></option>
                                        <option value="Japan"></option>
                                        <option value="Egypt"></option>
                                    </datalist>
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="checkout-postal">Postal code</label>
                                <div>
                                    <span class="fa fa-archive"></span>
                                    <input type="numeric" name="checkout-postal" id="checkout-postal" placeholder="Your postal code..."/>
                                </div>
                            </div>
                        </div>
                        <div class="form-control checkbox-control">
                            <input type="checkbox" name="checkout-checkbox" id="checkout-checkbox" />
                            <label for="checkout-checkbox">Save this information for next time</label>
                        </div>
                        <div class="form-control-btn">
                            <button>Continue</button>
                        </div>
                    </form>
                </section>

                <section class="checkout-details">
                    <div class="checkout-details-inner">
                    {cart.map((prod, index) => (
                        <div key={index} class="checkout-lists">
                            
                            <div class="card d-flex flex-row">
                                <div class="card-image"><img src={prod.image} alt="" /></div>
                                <div class="card-details">
                                    <div class="card-name">{prod.name}</div>
                                    <div class="card-price">                                {prod.onSale ? (
                                       <>
                                      <span>{prod.price - (prod.price * prod.sale / 100).toFixed(2)}</span>
                                      <span className='mx-1' style={{color: "#888", textDecoration:"line-through", fontWeight: "400"}}>{prod.price}</span>
                                      </>
                                ): prod.price}
                                </div>
                                    <div class="card-wheel">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>

                        </div>))}
                        <div class="checkout-shipping">
                            <h6>Shipping</h6>
                            <p>free</p>
                        </div>
                        <div class="checkout-total">
                            <h6>Total</h6>
                            <p>{calculateProductPrice()}</p>
                        </div>
                    </div>
                </section>
            </main>


        </div>
        </>
    )
}

export default Checkout
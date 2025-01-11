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
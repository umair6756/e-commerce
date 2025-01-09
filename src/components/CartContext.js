import React, { createContext, useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import products from '../data/products-data.json'
import { useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [wishlest, setWishlest] = useState([])
    const [shipping, setShipping] = useState('free')
    const [count, setCount] = useState(1);

    const addToCart = (product) =>{
        setCart((prevCart) => [...prevCart, product]);
        toast.success("Product added successfully 🧡 ", {
          position: "top-right",
          autoClose: 3000,  
          theme: "colored",  
            
           
        });

    }

    const addToWish = (product) =>{
      setWishlest((prevWish) => [...prevWish, product]);
      toast.success("Product added successfully 🧡 ", {
        position: "top-right",
        autoClose: 3000,  
        theme: "light",  
          
         
      });

      
    }

    const removeFromCart = (index) => {
      setCart((prevCart) => {
        
        return prevCart.filter((item, position) => position !== index)}) 
      toast.error('Product Remove from Cart 🤬 ',{
       autoClose: 2000,
       position :"top-right",
       theme: "dard",
      });
    }

    const removeFromWishlest = (index) => {
      setWishlest((prevWish) => {
        return prevWish.filter((item, prod) => prod !== index)})
      toast.error('Product Remove from Wishlest 🤬 ',{
       autoClose: 2000,
       position :"top-right",
       theme: "dark",
      });
    }

    const calculateProductPrice = () => {
      return cart.reduce((total, product) => total + product.price, 0);
    }

    const totalPrice = (shipping) => {
      const productPrice = calculateProductPrice();
      
      if(shipping === 'free'){
        return productPrice;
      }else if(shipping === 'standard'){
        return productPrice+200;
      }else if(shipping === 'express'){
        return productPrice+300;
      }
      
      
      return productPrice;
      
    }


    


    const decreament = () => {
      if (count > 1) {
        setCount(prevCount => prevCount - 1)
      }
    };
    const increament = () => setCount(prevCount => prevCount + 1);


    // ============   scroll Animation ==========

    const useScrollAnimation = () => {
      useEffect(() => {
        const checkBoxes = () => {
          const triggerBottom = (window.innerHeight / 5) * 4;
    
          document.querySelectorAll('.animationBox').forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
    
            if (boxTop < triggerBottom) {
              box.classList.add('show');
            } else {
              box.classList.remove('show');
            }
          });
        };
    
        window.addEventListener('scroll', checkBoxes);
    
        // Call once on component mount
        checkBoxes();
    
        // Cleanup on component unmount
        return () => {
          window.removeEventListener('scroll', checkBoxes);
        };
      }, []);
    }

 




    

  return (
    <CartContext.Provider value={{cart,setCart, wishlest,addToCart, removeFromCart,addToWish,removeFromWishlest, totalPrice, calculateProductPrice,shipping,setShipping,increament,decreament,count,setCount,useScrollAnimation}}>
        {children}
        <ToastContainer />
    </CartContext.Provider>
  );
};


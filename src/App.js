import Buttons from "./components/Buttons";
import Carasole from "./components/Carasole";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";





import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewArrival from "./components/NewArrival";
import Example from "./components/Navbar";
import TopProducts from "./components/TopProducts";
import Feactures from "./components/Feactures";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Product from "./pages/Product";
import APIKey from "./components/APIKey";
import ProductDetailPage from "./pages/ProductDetailPage";
import AddToCartPage from "./pages/AddToCartPage";
import { CartProvider } from "./components/CartContext";
import AddToCart from "./components/AddToCart";
import Wishlest from "./components/Wishlest";
import WishlestPage from "./pages/WishlestPage";
import Checkout from "./components/Checkout";
import CheckoutPage from "./pages/CheckoutPage";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import BlogDetailPage from "./pages/BlogDetailPage";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import Sidebar from "./dashboard/component/Sidebar";
import DashHome from "./dashboard/pages/DashHome";
import ViewProducts from "./dashboard/component/ViewProducts";
import ProductForm from "./dashboard/component/ProductForm";





// import Products2 from "./components/Products2";




function App() {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <Example/> */}

        {/* Home components  */}

        {/* <Carasole/>
        <Products/>
        <Buttons/>

        <NewArrival/>
        <TopProducts/>
        <Feactures/>
        <BlogCard/> */}

        {/* About components */}

        {/* <AboutUs/>
        <OurTeam/> */}

        {/* Contact components */}

        {/* <ContactUs/>
        <Footer/> */}
         <Router>
         <CartProvider>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
            <Route path="/Faq" element={<FAQ/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/product" element={<ProductDetailPage/>}></Route>
            <Route path="/cart" element={<AddToCartPage/>}></Route>
            <Route path="/product/:id" element={<ProductDetailPage/>}></Route>
            <Route path="/wishlest" element={<WishlestPage/>}></Route>
            <Route path="/checkout" element={<CheckoutPage/>}></Route>
            <Route path="/blog" element={<BlogPage/>}></Route>
            <Route path="/blog/:id" element={<BlogDetailPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/sidebar" element={<Sidebar/>}></Route>
            <Route path="/admin" element={<DashHome/>}></Route>
            <Route path="/view" element={<ViewProducts/>}></Route>
            <Route path="/form" element={<ProductForm/>}></Route>


            

            

            


            
      
          </Routes>

            </CartProvider>


         </Router>




         {/* <APIKey
         imageSrc='images/t-shirts/cloth1.png'

          zoomLevel={3} /> */}





        

        
        
        


   
    </div>
  );
}

export default App;

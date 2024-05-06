import React from 'react'
import App from '../ProjectPages/App';
import Contact from '../ProjectPages/Contact';
import TermsandCondition from '../ProjectPages/TermsandCondition'; 
import WarrentyPage from '../ProjectPages/WarrentyPage';
import FAQ from '../ProjectPages/FAQ';
import PaymentMethod from '../ProjectPages/PaymentMethod';
import Shippingmethod from '../ProjectPages/Shippingmethod';
import PrivacyPolicy from '../ProjectPages/PrivacyPolicy';
import Blog from '../ProjectPages/Blog';
import Cart from '../ProjectPages/Cart';
import { Routes, Route} from "react-router-dom";
import AboutPage from '../ProjectPages/AboutPage'
import ProductList from './ProductList';
import CreacteAccount from '../Header/CreacteAccount';
import Customize from './Customize';
import WishList from './WishList';
import CartList from './CartList';
import TestSample from '../TestSamples/TestSample';
import Colorpicker from '../TestSamples/Colorpicker';
import Dropdown from '../TestSamples/Dropdown';
import Likeandstar from '../TestSamples/Likeandstar';
import ImageSlider from '../TestSamples/ImageSlider';
const AppMain = () => {
  window.addEventListener("scroll", reveal);

  function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      var reveals2 = document.querySelectorAll(".reveal2");
      var reveals3 = document.querySelectorAll(".reveal3");
  
      applyStyles(reveals, "active");
      applyStyles(reveals2, "active2");
      applyStyles(reveals3, "active3");

      // Add more sets of elements and styles as needed
  }
  
  function applyStyles(elements, styleClass) {
      var windowheight = window.innerHeight;
      var revealpoint =-20;
  
      for (var i = 0; i < elements.length; i++) {
          var revealtop = elements[i].getBoundingClientRect().top;
  
          if (revealtop < windowheight - revealpoint) {
              elements[i].classList.add(styleClass);
              // Add more styles if needed
          } else {
              elements[i].classList.remove(styleClass);
              // Remove other styles if needed
          }
      }
  }
  
  return (
    <div>
        <Routes>
              <Route path="/" element={<App />} />
              <Route path="/contact" element={<Contact /> } />
              <Route path="/termsandconditions" element={<TermsandCondition />} />
              <Route path="/warrentypage" element={<WarrentyPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/paymentmethod" element={<PaymentMethod />} />
              <Route path="/shippingmethod" element={ <Shippingmethod />} />
              <Route path="/privacypolicy" element={ <PrivacyPolicy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={  <Cart />} />
              <Route path="/AboutPage" element={ <AboutPage />} />
              <Route path="/paymentmethod" element={<PaymentMethod/>} />
              <Route path="/ProductList/:id" element={<ProductList/>} />
              <Route path="/Signup" element={<CreacteAccount />}/>
              <Route path="/custom" element={<Customize />}/>
              <Route path="/cart/wishlist" element={<WishList />}/>
              <Route path="/cartList" element={<CartList />}/>
              <Route path="/samp" element={<TestSample />} />
              <Route path="/samp2" element={<Dropdown />} />
              <Route path="/samp3" element={<Colorpicker />} />
              <Route path="/samp4" element={<Likeandstar />} />
              <Route path="/samp5" element={<ImageSlider />} />
        </Routes>
    </div>
  )
}

export default AppMain
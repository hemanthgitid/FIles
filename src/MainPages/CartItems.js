import React, { useState, useEffect } from 'react';
import '../MainPages/CartItems.css';
import { IoCloseOutline } from "react-icons/io5";
import { product as cartDetails } from '../MainPages/CARTDETAILSRENDER'; // Import cart details
import axios from 'axios';

const CartItems = () => {
    const [cartdis, setCartdis] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // State to manage total price
    const [p, setp] = useState(false); // State to manage total price
    const username = localStorage.getItem('username');

    useEffect(() => {
        const fetchCartByUsername = async () => {
            try {
                const response = await axios.post(`/cartByUsername/${username}`);
                if (Array.isArray(response.data)) {
                    // Initialize quantity to 1 if it's NaN
                    const updatedCartdis = response.data.map(item => ({
                        ...item,
                        quantity: isNaN(item.quantity) ? 1 : item.quantity
                    }));
                    setCartdis(updatedCartdis);
                } else {
                    console.log("Received data is not an array:", response.data);
                }
            } catch (error) {
                console.log("Error fetching cart items", error);
            }
        };

        if (username) {
            fetchCartByUsername();
        }
    }, [username]); 

    const handleRemove = async (id) => {
        try {
            await axios.delete(`/cart/List/${id}/${username}`);
            setCartdis(prevState => prevState.filter(item => item.cartitem!== id));
        } catch (error) {
            console.log("Error removing item from wishlist", error);
        }
    };

    // Function to handle quantity change for a specific item
    const handleQuantityChange = (id, newQuantity) => {
        // Update the state of cartdis to reflect the new quantity
        setCartdis(prevState =>
            prevState.map(item =>
                item.cartitem === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    useEffect (()=>{
            // Calculate total price based on the updated quantities
            let total = 0;
            cartdis.forEach(item => {
                const productDetails = cartDetails.find(product => product.id === item.cartitem);
                if (productDetails) {
                    total += item.quantity * productDetails.product_price;
                }
            });
            setTotalPrice(total);
        },[cartdis]);

    useEffect ( ()=>{
                try{
                    if(cartdis.length!=0)
                     setp(true);
                    else
                     setp(false);
                }
                catch(err){
                        console.log('set price error bill')
                }
        },[cartdis])
        
    return (
        <div className='CartListouter'>
            <div className='CartListouter_title'>
                <div className='CartListouter_title_part1'>Added Items</div>
                <div className='CartListouter_title_part2'>
                    <ul>
                        <li>Size</li>
                        <li>Color</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            {cartdis.map(wishlistItem => {
                const productDetails = cartDetails.find(product => product.id === wishlistItem.cartitem);
                if (!productDetails) return null;
                return (
                    <div className='CartListouter_con' key={wishlistItem.cartitem}>
                        <div className='CartListouter_conp1'>
                            <div>
                                <img src={productDetails.img}  width={200} height={200} alt="Product" />
                            </div>
                            <div>
                                <h1 style={{fontWeight:'400'}}>CHAIR</h1>
                            </div>
                        </div>
                        <div className='CartListouter_conp2'>
                            <div><p>6</p></div>
                            <div><p>{productDetails.color}</p> </div>
                            <div><p>$ {productDetails.product_price}</p></div>
                            <div className='state_cart'>
                                {/* Use the handleQuantityChange function to update the quantity */}
                                <p onClick={() => handleQuantityChange(wishlistItem.cartitem, wishlistItem.quantity === 1 ? 1 : wishlistItem.quantity - 1)}>-</p>{wishlistItem.quantity}
                                <p onClick={() => handleQuantityChange(wishlistItem.cartitem, wishlistItem.quantity + 1)}>+</p>
                            </div>
                            <div className='state_cart'>
                                {/* Display total price for this product */}
                                <p>$ {(wishlistItem.quantity * productDetails.product_price).toFixed(2)}</p>
                            </div>
                            <div onClick={() => handleRemove(wishlistItem.cartitem)} style={{cursor:'pointer'}}><IoCloseOutline /></div>
                        </div>
                    </div>
                );
            })}
            {
                p && 

            <div className='Pricediv'>     
            {/* Display total price for all products */}
                <div>Total Price: </div>
                <div>$ {totalPrice.toFixed(2)} </div>
                <div>Coupon Code</div>
                <div><input type='number' name='coupon'  style={{color:'#888'}} placeholder="****" p="[0-9]{4}"  maxlength="4"  inputmode="numeric" /></div>
                 <div className='btnp' style={{  }}>BUY NOW</div>   
         </div>
            }
        </div>
    );
}

export default CartItems;

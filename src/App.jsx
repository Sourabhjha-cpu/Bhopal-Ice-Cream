import React, { useState } from 'react';
import IceCreamSelector from './components/IceCreamSelector';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const handleCheckout = (deliveryLocation) => {
        console.log('Order details:', {
            cart,
            deliveryLocation
        });
        alert('Order placed successfully!');
        setCart([]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Bhopal Ice Cream </h1>
            <IceCreamSelector addToCart={addToCart} />
            <Cart cart={cart} />
            <Checkout cart={cart} onCheckout={handleCheckout} />
        </div>
    );
};

export default App;

import React, { useState } from 'react';

const Checkout = ({ cart, onCheckout }) => {
    const [deliveryLocation, setDeliveryLocation] = useState('');

    const handleCheckout = () => {
        if (deliveryLocation && cart.length > 0) {
            onCheckout(deliveryLocation);
            setDeliveryLocation('');
        } else {
            let alertMessage = 'Please enter a delivery location and add items to your cart.';
            if (deliveryLocation) {
                alertMessage += `\nCurrent entered location: ${deliveryLocation}`;
            }
            alert(alertMessage);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">Checkout</h2>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Delivery Location:</label>
                <input
                    type="text"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            {deliveryLocation && (
                <div className="mt-4">
                    <p className="text-gray-700">Delivery Location: <span className="font-bold">{deliveryLocation}</span></p>
                </div>
            )}
            <button 
                onClick={handleCheckout} 
                className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
                Checkout
            </button>
        </div>
    );
};

export default Checkout;

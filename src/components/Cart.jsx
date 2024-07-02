import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-700">Your cart is empty</p>
            ) : (
                <ul className="list-disc list-inside space-y-2">
                    {cart.map((item, index) => (
                        <li key={index} className="text-gray-700">
                            <p>{item.type} with {item.flavors.join(', ')} and {item.toppings.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;

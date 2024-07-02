import React, { useState } from 'react';
import coneImage from '../assets/cone.png';
import cupImage from '../assets/cup.png';
import sundaeImage from '../assets/sundae.png';
import vanillaImage from '../assets/vanilla.png';
import chocolateImage from '../assets/chocolate.png';
import strawberryImage from '../assets/strawberry.png';
import sprinklesImage from '../assets/sprinkles.png';
import chocolateChipsImage from '../assets/chocolate-chips.png';
import nutsImage from '../assets/nuts.png';

const iceCreamTypes = [
    { id: 1, name: 'Cone', image: coneImage },
    { id: 2, name: 'Cup', image: cupImage },
    { id: 3, name: 'Sundae', image: sundaeImage }
];

const flavors = [
    { id: 1, name: 'Vanilla', image: vanillaImage },
    { id: 2, name: 'Chocolate', image: chocolateImage },
    { id: 3, name: 'Strawberry', image: strawberryImage }
];

const toppings = [
    { id: 1, name: 'Sprinkles', image: sprinklesImage },
    { id: 2, name: 'Chocolate Chips', image: chocolateChipsImage },
    { id: 3, name: 'Nuts', image: nutsImage }
];

const IceCreamSelector = ({ addToCart }) => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedFlavors, setSelectedFlavors] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState([]);

    const handleFlavorChange = (e) => {
        const value = e.target.value;
        setSelectedFlavors(prevFlavors =>
            prevFlavors.includes(value)
                ? prevFlavors.filter(flavor => flavor !== value)
                : prevFlavors.length < 2
                ? [...prevFlavors, value]
                : prevFlavors
        );
    };

    const handleToppingChange = (e) => {
        const value = e.target.value;
        setSelectedToppings(prevToppings =>
            prevToppings.includes(value)
                ? prevToppings.filter(topping => topping !== value)
                : [...prevToppings, value]
        );
    };

    const handleAddToCart = () => {
        addToCart({
            type: selectedType,
            flavors: selectedFlavors,
            toppings: selectedToppings
        });
        setSelectedType('');
        setSelectedFlavors([]);
        setSelectedToppings([]);
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Select Your Ice Cream</h2>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Type:</label>
                <div className="flex space-x-4">
                    {iceCreamTypes.map(type => (
                        <div 
                            key={type.id}
                            className={`cursor-pointer p-2 border rounded-lg ${selectedType === type.name ? 'border-indigo-500' : 'border-gray-300'}`}
                            onClick={() => setSelectedType(type.name)}
                        >
                            <img src={type.image} alt={type.name} className="w-16 h-16 object-cover mx-auto" />
                            <p className="text-center mt-2">{type.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Flavors:</label>
                <div className="flex space-x-4">
                    {flavors.map(flavor => (
                        <div 
                            key={flavor.id}
                            className={`cursor-pointer p-2 border rounded-lg ${selectedFlavors.includes(flavor.name) ? 'border-indigo-500' : 'border-gray-300'}`}
                            onClick={() => handleFlavorChange({ target: { value: flavor.name } })}
                        >
                            <img src={flavor.image} alt={flavor.name} className="w-16 h-16 object-cover mx-auto" />
                            <p className="text-center mt-2">{flavor.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Toppings:</label>
                <div className="flex space-x-4">
                    {toppings.map(topping => (
                        <div 
                            key={topping.id}
                            className={`cursor-pointer p-2 border rounded-lg ${selectedToppings.includes(topping.name) ? 'border-indigo-500' : 'border-gray-300'}`}
                            onClick={() => handleToppingChange({ target: { value: topping.name } })}
                        >
                            <img src={topping.image} alt={topping.name} className="w-16 h-16 object-cover mx-auto" />
                            <p className="text-center mt-2">{topping.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button 
                onClick={handleAddToCart} 
                className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default IceCreamSelector;

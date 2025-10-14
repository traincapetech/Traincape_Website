import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../components/CartContext";
import FormatPrice from "../../components/Formatprice";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, title, name, image, description, price, quantity, type, course, subCourse }) => {
  const { removeItem, updateQuantity } = useCartContext();

  const handleIncrease = () => {
    if (quantity < 99) updateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) updateQuantity(id, quantity - 1);
  };

  const displayTitle = title || name || (type === 'voucher' ? `${course || 'Course'} - ${subCourse || 'Voucher'}` : 'Product');
  const displayDesc = description || (type === 'voucher' ? 'Official certification voucher' : '');
  const placeholderSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'>
      <rect width='96' height='96' rx='10' fill='#eef2f7'/>
      <g fill='#94a3b8'>
        <circle cx='48' cy='36' r='12'/>
        <rect x='24' y='56' width='48' height='8' rx='4'/>
      </g>
    </svg>`
  );
  const imageSrc = image || `data:image/svg+xml;utf8,${placeholderSvg}`;

  return (
    <div className="rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-4 mb-4">
      <div className="flex flex-col md:flex-row w-full">
        {/* Image and Info Section */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0 md:w-2/5">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden border border-gray-200 flex-shrink-0">
            <img 
              src={imageSrc} 
              alt={displayTitle} 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">{displayTitle}</h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1 line-clamp-2">{displayDesc}</p>
          </div>
        </div>

        {/* Price, Quantity, Actions Section */}
        <div className="flex flex-wrap items-center justify-between md:justify-around md:w-3/5">
          {/* Price */}
          <div className="text-center mb-3 md:mb-0">
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-medium text-gray-800">
              <FormatPrice price={price} currency={type === 'voucher' ? 'USD' : 'INR'} />
            </p>
          </div>
          
          {/* Quantity */}
          <div className="mb-3 md:mb-0">
            <p className="text-sm text-gray-500 text-center mb-1">Quantity</p>
            <CartAmountToggle
              quantity={quantity}
              setDecrease={handleDecrease}
              setIncrease={handleIncrease}
            />
          </div>

          {/* Subtotal */}
          <div className="text-center mb-3 md:mb-0">
            <p className="text-sm text-gray-500">Subtotal</p>
            <p className="font-semibold text-gray-900">
              <FormatPrice price={price * quantity} currency={type === 'voucher' ? 'USD' : 'INR'} />
            </p>
          </div>

          {/* Remove Button */}
          <div className="md:ml-4">
            <button 
              onClick={() => removeItem(id)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 transition-colors duration-300"
              title="Remove item"
            >
              <FaTrash size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
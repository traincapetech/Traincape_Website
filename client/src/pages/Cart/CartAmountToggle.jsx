import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={setDecrease}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Decrease Quantity"
          disabled={quantity <= 1}
        >
          <FaMinus size={12} className={quantity <= 1 ? "opacity-50" : ""} />
        </button>

        <div className="px-4 py-1 min-w-[40px] text-center font-medium text-gray-800 border-x border-gray-200">
          {quantity}
        </div>

        <button
          onClick={setIncrease}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Increase Quantity"
          disabled={quantity >= 99}
        >
          <FaPlus size={12} className={quantity >= 99 ? "opacity-50" : ""} />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle; 
import React, { useState } from "react";
import { useCartContext } from "../../components/CartContext";
import CartItem from "./CartItem";
import FormatPrice from "../../components/Formatprice";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCreditCard, FaShieldAlt, FaBolt, FaHeadset } from "react-icons/fa";
import EmptyCart from "./EmptyCart";
import { loadStripe } from "@stripe/stripe-js";

// Now we can access the email property
const email = JSON.parse(localStorage.getItem("user") || "{}")?.email || "";

const Cart = () => {
  const { cart } = useCartContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const accountDetails = {
    accountNumber: "732205000345",
    bankName: "ICICI Bank",
    branchName: "Palam Colony",
    accountHolderName: "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED",
    ifscCode: "ICIC0007322",
    email: "sales@traincapetech.info",
  };

  const alertMessage = `Account Details:
Account Number: ${accountDetails.accountNumber}
Bank Name: ${accountDetails.bankName}
Branch Name: ${accountDetails.branchName}
Account Holder Name: ${accountDetails.accountHolderName}
IFSC Code: ${accountDetails.ifscCode}
Email: ${accountDetails.email}
`;

  // Determine currency: vouchers use USD
  const sessionCurrency = cart.some((i) => i.type === "voucher") ? "usd" : "inr";

  const totalSubtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  const handlePayNow = async () => {
    await handleStripeCheckout();
  };

  const handleStripeCheckout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.REACT_APP_STRIPE_PK
      );

      // Prepare line items for Stripe
      const lineItems = cart.map((item) => ({
        price_data: {
          currency: sessionCurrency,
          product_data: {
            name: item.name || item.title || "Item",
            // images: [item.image], this make the url too long for the stripe
          },
          unit_amount: item.price*100, // Stripe expects amounts in cents
        },
        quantity: item.quantity,
      }));

      const paymentResponse = await axios({
        method: "post",
        url: `https://traincape-backend-1.onrender.com/payments/stripe`,
        data: {
          lineItems,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/cancel-stripe-payment`,
          email,
          productIds:cart.map(item => item.id),
        },
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15000,
      });
      const session = paymentResponse.data;
      console.log("Session--->", session);
      if (session.url) {
        window.location.href = session.url;
        return { redirecting: true, sessionId: session.sessionId };
      } else {
        // Fall back to redirectToCheckout if no URL
        const result = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });

        if (result.error) {
          throw new Error(result.error.message);
        }
        return { redirecting: true, sessionId: session.sessionId };
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className="py-12 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Your Cart</h1>
          <p className="text-gray-600 mt-2">{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
          <div className="mt-4 flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span><span className="font-semibold text-gray-800">Cart</span></div>
            <div className="h-px bg-gray-300 flex-1" />
            <div className="flex items-center gap-2 opacity-70"><span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">2</span><span className="font-semibold text-gray-600">Payment</span></div>
            <div className="h-px bg-gray-300 flex-1" />
            <div className="flex items-center gap-2 opacity-70"><span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">3</span><span className="font-semibold text-gray-600">Success</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Column */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-xl overflow-hidden">
              {/* Header - only visible on larger screens */}
              <div className="hidden md:grid grid-cols-4 text-sm font-medium text-gray-500 bg-gray-50 p-4">
                <span className="col-span-2">Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Subtotal</span>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-2xl p-6 sticky top-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <FormatPrice price={totalSubtotal} currency={sessionCurrency === 'usd' ? 'USD' : 'INR'} />
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3"></div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <FormatPrice price={totalSubtotal} currency={sessionCurrency === 'usd' ? 'USD' : 'INR'} />
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={handlePayNow}
                  className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-md"
                >
                  <FaCreditCard className="text-white mr-3" />
                  <span className="font-medium">Pay with Card (Stripe)</span>
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">Secured by Stripe. Currency: {sessionCurrency.toUpperCase()}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-500">
                <p className="mb-2">
                  We accept secure payments via credit/debit cards only.
                </p>
                <p>
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:sales@traincapetech.info"
                    className="text-blue-600"
                  >
                    sales@traincapetech.info
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><FaShieldAlt /></div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Secure payments</div>
              <div className="text-xs text-gray-600">SSL encryption & Stripe protection</div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center"><FaBolt /></div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Instant delivery</div>
              <div className="text-xs text-gray-600">Voucher codes delivered by email</div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><FaHeadset /></div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Dedicated support</div>
              <div className="text-xs text-gray-600">We typically reply within 12 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
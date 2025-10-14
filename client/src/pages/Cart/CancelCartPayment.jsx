import React from 'react'
import { AlertCircle } from 'lucide-react'

const CancelCartPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-red-100">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Payment Cancelled</h1>
        
        <p className="text-gray-600 mb-6">
          Your Cart course payment has been cancelled. No charges have been made to your account.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => window.location.href = '/Courses-details'} 
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Return to Courses
          </button>
          
          <button 
            onClick={() => window.location.href = '/cart'} 
            className="w-full py-3 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Return to Cart
          </button>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? <a href="/contact-us" className="text-blue-600 hover:text-blue-800">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelCartPayment
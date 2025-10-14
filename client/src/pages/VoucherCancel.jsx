import React from 'react';
import { Link } from 'react-router-dom';
import './VoucherCancel.module.css';

const VoucherCancel = () => {
  return (
    <div className="voucher-cancel-page">
      <div className="cancel-container">
        <div className="cancel-header">
          <div className="cancel-icon">❌</div>
          <h1>Purchase Cancelled</h1>
          <p>Your voucher purchase was cancelled. No charges were made to your account.</p>
        </div>

        <div className="cancel-info">
          <h3>What happened?</h3>
          <p>You cancelled the payment process before it was completed. This is completely normal and happens for various reasons:</p>
          
          <div className="reasons-list">
            <div className="reason">
              <span className="reason-icon">💳</span>
              <div>
                <h4>Payment Method Issues</h4>
                <p>Problems with your payment method or card</p>
              </div>
            </div>
            <div className="reason">
              <span className="reason-icon">🤔</span>
              <div>
                <h4>Changed Your Mind</h4>
                <p>Decided to think about it more</p>
              </div>
            </div>
            <div className="reason">
              <span className="reason-icon">📱</span>
              <div>
                <h4>Technical Issues</h4>
                <p>Browser or connection problems</p>
              </div>
            </div>
          </div>
        </div>

        <div className="support-info">
          <h3>Need Help?</h3>
          <p>If you experienced any issues or have questions about the purchase process, our support team is here to help:</p>
          <div className="support-options">
            <a href="mailto:support@traincapetech.in" className="support-btn">
              📧 Email Support
            </a>
            <a href="tel:+1234567890" className="support-btn">
              📞 Call Support
            </a>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/training" className="secondary-btn">
            Browse Courses
          </Link>
          <Link to="/" className="primary-btn">
            Go to Homepage
          </Link>
        </div>

        <div className="retry-info">
          <h3>Ready to try again?</h3>
          <p>You can attempt the purchase again at any time. Your voucher will be reserved for you during the checkout process.</p>
        </div>
      </div>
    </div>
  );
};

export default VoucherCancel;

import React from 'react';
import './VoucherAnalytics.module.css';

const VoucherAnalytics = ({ analytics, loading, onRefresh }) => {
  if (loading) {
    return (
      <div className="analytics-loading">
        <div className="spinner"></div>
        <p>Loading analytics...</p>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="analytics-empty">
        <p>No analytics data available</p>
        <button onClick={onRefresh} className="refresh-btn">Refresh</button>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="voucher-analytics">
      <div className="analytics-header">
        <h2>Voucher Analytics & Reports</h2>
        <button onClick={onRefresh} className="refresh-btn">
          🔄 Refresh Data
        </button>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon">📦</div>
          <div className="card-content">
            <h3>Total Batches</h3>
            <p className="card-number">{analytics.totalBatches}</p>
            <p className="card-subtitle">Active: {analytics.activeBatches}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">🎫</div>
          <div className="card-content">
            <h3>Total Vouchers</h3>
            <p className="card-number">{analytics.totalVouchers}</p>
            <p className="card-subtitle">Available: {analytics.availableVouchers}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">💰</div>
          <div className="card-content">
            <h3>Total Revenue</h3>
            <p className="card-number">{formatCurrency(analytics.totalRevenue)}</p>
            <p className="card-subtitle">USD</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">📈</div>
          <div className="card-content">
            <h3>Sales Performance</h3>
            <p className="card-number">{analytics.soldVouchers}</p>
            <p className="card-subtitle">Sold / {analytics.usedVouchers} Used</p>
          </div>
        </div>
      </div>

      {/* Sales by Course */}
      <div className="analytics-section">
        <h3>Sales by Course</h3>
        <div className="sales-chart">
          {analytics.salesByCourse.length > 0 ? (
            <div className="sales-list">
              {analytics.salesByCourse.map((course, index) => (
                <div key={index} className="sales-item">
                  <div className="sales-info">
                    <h4>{course._id}</h4>
                    <p>{course.count} vouchers sold</p>
                  </div>
                  <div className="sales-revenue">
                    <span className="revenue-amount">{formatCurrency(course.revenue)}</span>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${(course.revenue / analytics.totalRevenue) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No sales data available</p>
          )}
        </div>
      </div>

      {/* Recent Purchases */}
      <div className="analytics-section">
        <h3>Recent Purchases</h3>
        <div className="recent-purchases">
          {analytics.recentPurchases.length > 0 ? (
            <div className="purchases-table">
              <div className="table-header">
                <span>Customer</span>
                <span>Course</span>
                <span>Amount</span>
                <span>Date</span>
              </div>
              {analytics.recentPurchases.map((purchase, index) => (
                <div key={index} className="table-row">
                  <span className="customer-info">
                    <strong>{purchase.customer.name}</strong>
                    <small>{purchase.customer.email}</small>
                  </span>
                  <span>{purchase.course} - {purchase.subCourse}</span>
                  <span className="amount">{formatCurrency(purchase.payment.amount)}</span>
                  <span className="date">{formatDate(purchase.purchasedAt)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No recent purchases</p>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-item">
          <h4>Conversion Rate</h4>
          <p>{analytics.totalVouchers > 0 ? ((analytics.soldVouchers / analytics.totalVouchers) * 100).toFixed(1) : 0}%</p>
        </div>
        <div className="stat-item">
          <h4>Average Order Value</h4>
          <p>{analytics.soldVouchers > 0 ? formatCurrency(analytics.totalRevenue / analytics.soldVouchers) : '$0'}</p>
        </div>
        <div className="stat-item">
          <h4>Inventory Utilization</h4>
          <p>{analytics.totalVouchers > 0 ? ((analytics.soldVouchers / analytics.totalVouchers) * 100).toFixed(1) : 0}%</p>
        </div>
      </div>
    </div>
  );
};

export default VoucherAnalytics;

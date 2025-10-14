import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../config/api';
import { BarChart2, Layers, PlusCircle, RefreshCw } from 'lucide-react';
import CreateVoucherBatch from './CreateVoucherBatch';
import VoucherAnalytics from './VoucherAnalytics';
import VoucherBatches from './VoucherBatches';
import styles from './VoucherManagement.module.css';

const VoucherManagement = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [analytics, setAnalytics] = useState(null);
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/vouchers/analytics`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAnalytics(response.data.analytics);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBatches = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/vouchers/batches`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBatches(response.data.batches);
    } catch (error) {
      console.error('Error fetching batches:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'analytics') {
      fetchAnalytics();
    } else if (activeTab === 'batches') {
      fetchBatches();
    }
  }, [activeTab]);

  const handleBatchCreated = () => {
    fetchBatches();
    fetchAnalytics();
  };

  return (
    <div className={styles.voucherManagement}>
      {/* Hero Header */}
      <div className={styles.header}>
        <h1 className="text-3xl md:text-4xl font-extrabold">Voucher Management</h1>
        <p className="text-gray-600">Create batches, manage inventory, and track sales</p>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'create' ? styles.active : ''}`}
          onClick={() => setActiveTab('create')}
          title="Create a new voucher batch"
        >
          <span className="inline-flex items-center gap-2">
            <PlusCircle className="w-4 h-4" /> Create Batch
          </span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'batches' ? styles.active : ''}`}
          onClick={() => setActiveTab('batches')}
          title="Manage existing batches and prices"
        >
          <span className="inline-flex items-center gap-2">
            <Layers className="w-4 h-4" /> Inventory
          </span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'analytics' ? styles.active : ''}`}
          onClick={() => setActiveTab('analytics')}
          title="View sales and voucher analytics"
        >
          <span className="inline-flex items-center gap-2">
            <BarChart2 className="w-4 h-4" /> Analytics
          </span>
        </button>
        <button
          className={styles.tab}
          onClick={() => {
            if (activeTab === 'analytics') fetchAnalytics();
            if (activeTab === 'batches') fetchBatches();
          }}
          title="Refresh"
        >
          <span className="inline-flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Refresh
          </span>
        </button>
      </div>

      {/* Quick Stats (when analytics available) */}
      {activeTab !== 'create' && analytics && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg border p-4">
            <p className="text-sm text-gray-500">Available Vouchers</p>
            <p className="text-2xl font-bold">{analytics.availableVouchers}</p>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <p className="text-sm text-gray-500">Sold Vouchers</p>
            <p className="text-2xl font-bold">{analytics.soldVouchers}</p>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold">${(analytics.totalRevenue || 0).toLocaleString()}</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={styles.content}>
        {activeTab === 'create' && (
          <CreateVoucherBatch onBatchCreated={handleBatchCreated} />
        )}
        {activeTab === 'batches' && (
          <VoucherBatches 
            batches={batches} 
            loading={loading} 
            onRefresh={fetchBatches}
            onBatchUpdated={handleBatchCreated}
          />
        )}
        {activeTab === 'analytics' && (
          <VoucherAnalytics 
            analytics={analytics} 
            loading={loading} 
            onRefresh={fetchAnalytics}
          />
        )}
      </div>
    </div>
  );
};

export default VoucherManagement;

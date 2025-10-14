import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateVoucherBatch.module.css';
import API_BASE_URL from '../../../config/api';

const CreateVoucherBatch = ({ onBatchCreated }) => {
  const [formData, setFormData] = useState({
    course: '',
    subCourse: '',
    price: '',
    totalVouchers: '',
    voucherCodes: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Limit to Courses page vendors only
  const courses = [
    'IBM',
    'META',
    'PMI',
    'IT Specialist',
    'Swift Development',
    'Tally',
    'Microsoft Office Specialist',
    'Autodesk',
    'Microsoft Certified Fundamentals',
    'Adobe',
    'Unity',
    'Cisco'
  ];

  const subCourses = {
    'Microsoft Office Specialist': [
      'MicrosoftExcelAssociate',
      'MicrosoftWordAssociate',
      'MicrosoftPowerPointAssociate',
      'MicrosoftExcelExpert',
      'MicrosoftWordExpert'
    ],
    'Microsoft Certified Fundamentals': [
      'MicrosoftMS900',
      'MicrosoftPl300',
      'MicrosoftCyberAnalyst'
    ],
    Cisco: [
      'CCSTNetworking',
      'CCSTcybersecurity'
    ],
    Adobe: [
      'AdobePhotoshop',
      'AdobeIllustrator',
      'AdobeInDesign',
      'AdobeAfterEffects',
      'AdobePremierePro',
      'AdobeXD'
    ],
    Autodesk: [
      'AutodeskAutoCAD',
      'Autodesk3dsMax',
      'AutodeskFusion360',
      'AutodeskRevit',
      'AutodeskMaya'
    ],
    IBM: [
      'IBMAgileMethodologies',
      'IBMBigData',
      'IBMCloudFundamental',
      'IBMDataAnalysis',
      'IBMDeepLearning',
      'IBMDevopsFundamentals',
      'IBMJavaScript',
      'IBMKubernetes',
      'IBMMachineLearning',
      'IBMMethodology',
      'IBMNoSQL',
      'IBMNodeJs',
      'IBMPython',
      'IBMRDBMS',
      'IBMRestAPI',
      'IBMScala',
      'IBMSoftwareFoundation',
      'IBMSQL'
    ],
    META: [
      'MetaAndroidDeveloper',
      'MetaBackEndDeveloper',
      'MetaDigitalMarketing',
      'MetaFrontEndDeveloper',
      'MetaIosDeveloper'
    ],
    'PMI': ['PMIProjectManagement'],
    'IT Specialist': [
      'ITSpecialistHTML',
      'ITSpecialistJavaScript',
      'ITSpecialistNetworking'
    ],
    'Swift Development': ['SwiftDevelopment'],
    Tally: ['TallyPrime','TallyERP9'],
    Unity: ['UnityCertifiedUserArtist','UnityCertifiedUserProgrammer']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Parse voucher codes
      const voucherCodes = formData.voucherCodes
        .split('\n')
        .map(code => code.trim())
        .filter(code => code.length > 0);

      if (voucherCodes.length !== parseInt(formData.totalVouchers)) {
        setMessage('Number of voucher codes must match total vouchers');
        setLoading(false);
        return;
      }

      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_BASE_URL}/vouchers/batches`,
        {
          ...formData,
          price: parseFloat(formData.price),
          totalVouchers: parseInt(formData.totalVouchers),
          voucherCodes
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setMessage('Voucher batch created successfully!');
      setFormData({
        course: '',
        subCourse: '',
        price: '',
        totalVouchers: '',
        voucherCodes: '',
        description: ''
      });

      if (onBatchCreated) {
        onBatchCreated();
      }
    } catch (error) {
      // error may be transformed by axios interceptor to just the data object
      const serverMsg = error?.message || error?.error || error?.response?.data?.message;
      console.error('Error creating voucher batch:', error);
      setMessage(serverMsg || 'Error creating voucher batch');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles['create-voucher-batch']}>
      <h2>Create New Voucher Batch</h2>
      <p className={styles.description}>
        Create a new batch of vouchers for a specific course and subcourse. 
        Enter the voucher codes from Certiport or other providers.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="course">Course *</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Course</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="subCourse">Sub Course *</label>
            <select
              id="subCourse"
              name="subCourse"
              value={formData.subCourse}
              onChange={handleInputChange}
              required
              disabled={!formData.course}
            >
              <option value="">Select Sub Course</option>
              {formData.course && subCourses[formData.course]?.map(subCourse => (
                <option key={subCourse} value={subCourse}>{subCourse}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="price">Price (USD) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              min="0"
              step="0.01"
              required
              placeholder="Enter price in USD"
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="totalVouchers">Total Vouchers *</label>
            <input
              type="number"
              id="totalVouchers"
              name="totalVouchers"
              value={formData.totalVouchers}
              onChange={handleInputChange}
              min="1"
              required
              placeholder="Number of vouchers"
            />
          </div>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Optional description for this batch"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="voucherCodes">Voucher Codes *</label>
          <textarea
            id="voucherCodes"
            name="voucherCodes"
            value={formData.voucherCodes}
            onChange={handleInputChange}
            required
            rows="8"
            placeholder="Enter voucher codes, one per line"
          />
          <small>Enter one voucher code per line. Number of codes must match total vouchers.</small>
        </div>

        {message && (
          <div className={`${styles.message} ${message.includes('successfully') ? styles.messageSuccess : styles.messageError}`}>
            {message}
          </div>
        )}

        <button type="submit" className={`${styles['submit-btn']} ${styles.submitBtn}`} disabled={loading}>
          {loading ? 'Creating Batch...' : 'Create Voucher Batch'}
        </button>
      </form>
    </div>
  );
};

export default CreateVoucherBatch;

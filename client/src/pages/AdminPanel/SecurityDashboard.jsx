import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config/api';

const SecurityDashboard = () => {
  const [logs, setLogs] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    course: '',
    level: '',
    violationType: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    fetchSecurityData();
  }, [filters]);

  const fetchSecurityData = async () => {
    try {
      setLoading(true);
      
      // Fetch logs
      const logsResponse = await axios.get(`${API_ENDPOINTS.SECURITY}/logs`, {
        params: filters
      });
      setLogs(logsResponse.data.logs || []);

      // Fetch statistics
      const statsResponse = await axios.get(`${API_ENDPOINTS.SECURITY}/statistics`, {
        params: filters
      });
      setStatistics(statsResponse.data.statistics || {});
    } catch (error) {
      console.error('Error fetching security data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-600 text-white';
      case 'high': return 'bg-orange-600 text-white';
      case 'medium': return 'bg-yellow-600 text-white';
      case 'low': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getViolationTypeIcon = (type) => {
    switch (type) {
      case 'fullscreen': return '🖥️';
      case 'tab': return '📑';
      case 'copy': return '📋';
      case 'contextmenu': return '🖱️';
      case 'selection': return '📝';
      default: return '⚠️';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading security data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Security Dashboard</h1>
        <button
          onClick={fetchSecurityData}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Refresh Data
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Course</label>
            <select
              value={filters.course}
              onChange={(e) => handleFilterChange('course', e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">All Courses</option>
              <option value="AWS">AWS</option>
              <option value="Microsoft">Microsoft</option>
              <option value="PECB">PECB</option>
              <option value="comptia">CompTIA</option>
              <option value="Internal">Internal</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Level</label>
            <select
              value={filters.level}
              onChange={(e) => handleFilterChange('level', e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">All Levels</option>
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Violation Type</label>
            <select
              value={filters.violationType}
              onChange={(e) => handleFilterChange('violationType', e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">All Types</option>
              <option value="fullscreen">Fullscreen</option>
              <option value="tab">Tab Switching</option>
              <option value="copy">Copy/Paste</option>
              <option value="contextmenu">Right-click</option>
              <option value="selection">Text Selection</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Start Date</label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => handleFilterChange('startDate', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">End Date</label>
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => handleFilterChange('endDate', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => setFilters({
                course: '',
                level: '',
                violationType: '',
                startDate: '',
                endDate: ''
              })}
              className="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Violations</h3>
          <p className="text-3xl font-bold text-red-600">
            {logs.length}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Unique Users</h3>
          <p className="text-3xl font-bold text-blue-600">
            {new Set(logs.map(log => log.userId)).size}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Critical Violations</h3>
          <p className="text-3xl font-bold text-red-800">
            {logs.filter(log => log.severity === 'critical').length}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Today's Violations</h3>
          <p className="text-3xl font-bold text-orange-600">
            {logs.filter(log => {
              const today = new Date().toDateString();
              return new Date(log.timestamp).toDateString() === today;
            }).length}
          </p>
        </div>
      </div>

      {/* Recent Violations */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Security Violations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Violation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {logs.slice(0, 20).map((log, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {log.username}
                      </div>
                      <div className="text-sm text-gray-500">
                        {log.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">
                        {getViolationTypeIcon(log.violationType)}
                      </span>
                      <span className="text-sm font-medium text-gray-900 capitalize">
                        {log.violationType}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {log.course}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {log.level}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(log.severity)}`}>
                      {log.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.violationCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;

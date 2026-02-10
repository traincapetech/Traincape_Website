import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ConsultantChat from './pages/ConsultantChat';

const AllRoute = () => {
  const location = useLocation();
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Implement your token retrieval logic here
    // For example, you can use localStorage or a state management library
    setToken(true); // Replace with actual token retrieval logic
  }, []);

  return (
    <>
      {/* Test Route */}
      <Route
        path="/test"
        element={
          token ? (
            <Test />
          ) : (
            <Navigate
              to="/login"
              state={{
                from: "/test",
                testParams: location.state
              }}
              replace
            />
          )
        }
      />

      {/* Consultant Route - No Auth for now */}
      <Route path="/consultant" element={<ConsultantChat />} />
    </>
  );
};

export default AllRoute; 
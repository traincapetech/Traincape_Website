import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import AllRoute from "./allRoute/AllRoute";

import WhatsAppPopup from "./components/WhatsAppPopup";
import ErrorBoundary from "./components/ErrorBoundary";
import ChunkErrorBoundary from "./components/ChunkErrorBoundary";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import WebsiteCounter from "./components/WebsiteCounter";

const App = () => {
  return (
    <ChunkErrorBoundary>
      <HelmetProvider>
       
          <LanguageProvider>
            <ErrorBoundary>
              <Toaster position="top-center" reverseOrder={false} />
              <Navbar />
              <AllRoute />
              <Footer />
              
              <WhatsAppPopup />
              <WebsiteCounter />
            </ErrorBoundary>
          </LanguageProvider>
        
      </HelmetProvider>
    </ChunkErrorBoundary>
  );
};

export default App;

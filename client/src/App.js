import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster, toast } from "react-hot-toast";
import AllRoute from "./allRoute/AllRoute";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";
import axios from "axios";

import WhatsAppPopup from "./components/WhatsAppPopup";
import GlobalChat from "./components/GlobalChat";
import ErrorBoundary from "./components/ErrorBoundary";
import ChunkErrorBoundary from "./components/ChunkErrorBoundary";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import WebsiteCounter from "./components/WebsiteCounter";


const App = () => {
  const location = useLocation();
  const isConsultantPage = location.pathname.startsWith('/consultant');

  useEffect(() => {
    // AOS is initialized via npm bundle (not via CDN) to keep react-snap stable.
    // Skip during react-snap prerender.
    if (typeof navigator !== "undefined" && String(navigator.userAgent || "").includes("ReactSnap")) return;
    (async () => {
      try {
        const AOS = (await import("aos")).default;
        await import("aos/dist/aos.css");
        AOS.init({ offset: 200, duration: 800, once: true });
      } catch (e) {
        // no-op (AOS is optional)
      }
    })();
  }, []);

  useEffect(() => {
    const setupNotification = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey: "BP-58q8LVZ_4o_4Vh7KiE0kYMa_g8mChjDOF03QfakQ8Y5Zq3h7cU8xfi-glsD0LhjJaqGLXkh8pj7FVZVA-2E8"
          });

          if (token) {
            console.log("FCM Token generated:", token);
            // If consultant is logged in, send token to backend
            const consultantToken = localStorage.getItem('consultantToken');
            if (consultantToken) {
              await axios.post('http://localhost:8080/consultant/fcm-token', { fcmToken: token }, {
                headers: { 'auth-token': consultantToken }
              });
              console.log("FCM Token sent to server");
            }
          }
        }
      } catch (error) {
        console.error("Error setting up notifications:", error);
      }
    };

    setupNotification();

    // Foreground message listener
    if (messaging) {
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        const { title, body } = payload.notification;

        // 1. Play Sound
        try {
          const audio = new Audio('/alert.mp3');
          audio.play().catch(e => console.log('Audio play failed (maybe autoplay blocked):', e));
        } catch (e) {
          console.log('Error playing sound:', e);
        }

        // 2. Show in-app Toast
        toast((t) => (
          <div onClick={() => toast.dismiss(t.id)}>
            <p className="font-bold">{title}</p>
            <p>{body}</p>
          </div>
        ), { duration: 5000, icon: '🔔' });

        // 3. Show native OS Desktop Notification
        if (Notification.permission === 'granted') {
          const notificationOptions = {
            body: body,
            icon: "/logo192.png",
            requireInteraction: true,
            tag: 'chat-request',
            renotify: true
          };
          new Notification(title, notificationOptions);
        }
      });
    }
  }, []);
  return (
    <ChunkErrorBoundary>
      <HelmetProvider>

        <LanguageProvider>
          <ErrorBoundary>
            <Toaster position="top-center" reverseOrder={false} />
            {!isConsultantPage && <Navbar />}
            <AllRoute />
            {!isConsultantPage && <Footer />}

            {!isConsultantPage && <WhatsAppPopup />}
            {!isConsultantPage && <GlobalChat />}
            <WebsiteCounter />
          </ErrorBoundary>
        </LanguageProvider>

      </HelmetProvider>
    </ChunkErrorBoundary>
  );
};

export default App;

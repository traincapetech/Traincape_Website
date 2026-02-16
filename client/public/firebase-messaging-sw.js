// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD3TARDpWbgEioArkLXW4obpUAqoWg_VGY",
  projectId: "mytraincape",
  messagingSenderId: "895124972249",
  appId: "1:895124972249:web:33d5d2c24e2741493794c8",
});

const messaging = firebase.messaging();

// This handles background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
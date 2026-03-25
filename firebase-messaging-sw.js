importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBjCTkvddi8Iq9b7L9RTltaV4vQdNa26ZQ",
  authDomain: "test-eve-fc889.firebaseapp.com",
  projectId: "test-eve-fc889",
  messagingSenderId: "31062742840",
  appId: "1:31062742840:web:05a8253aa3fc154f3893cd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
self.registration.showNotification(payload.notification.title,{
body: payload.notification.body
});
});
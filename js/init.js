const firebaseConfig = {
    apiKey: "AIzaSyDAkWZ2ZBTd3PQzdv1XnSeLhMW1T7So5Q4",
    authDomain: "pizzascastillo-ef83a.firebaseapp.com",
    projectId: "pizzascastillo-ef83a",
    storageBucket: "pizzascastillo-ef83a.appspot.com",
    messagingSenderId: "678552553175",
    appId: "1:678552553175:web:0d49a683731dde247b1292",
    measurementId: "${config.measurementId}"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
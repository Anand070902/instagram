"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA_i2IMBMZ99f2mg8ZnSLWQLE3b3Nir0wU",
  authDomain: "instagram-web-18912.firebaseapp.com",
  projectId: "instagram-web-18912",
  storageBucket: "instagram-web-18912.appspot.com",
  messagingSenderId: "728462013102",
  appId: "1:728462013102:web:42996ddaf5ff549628333f"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
//# sourceMappingURL=firebase.dev.js.map

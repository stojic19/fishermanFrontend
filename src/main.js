import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getDatabase} from "firebase/database";
import axios from 'axios'
//mape
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
//alertovi
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
//loading
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
//calendars
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import VCalendar from 'v-calendar';

import store from '../src/store/index'

import './plugins/chart'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBouTkxCcQAn4H4prTq4GgY0IacEakcKtM",
  authDomain: "isafisherman-94973.firebaseapp.com",
  projectId: "isafisherman-94973",
  storageBucket: "isafisherman-94973.appspot.com",
  messagingSenderId: "157752780074",
  appId: "1:157752780074:web:c415319784280334c86a53",
  measurementId: "G-4PTP42V219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(localStorage.token!='empty'&& localStorage.logged!=false)
  axios.defaults.headers['Authorization']="Bearer "+ localStorage.token


  
  
  // Automatically allow cross-origin requests
 
  
  




getDatabase(app);
createApp(App).use(App).use(router).use(VueSweetalert2).use(VCalendar).use(VueLoading).use(Datepicker).use(store).use(OpenLayersMap).mount('#app');




import {
  IonApp,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainView from './pages/Core/MainView';

// Firebase
import firebase from "firebase/app";
import "firebase/auth";

// Store & Store Providers
import { Provider } from 'react-redux';
import { store } from './store/store';

var firebaseConfig = {
  apiKey: "AIzaSyAxL99_uPvFFlFV4Sv6OMZR1mhmEZc61Vs",
  authDomain: "ploutos-34.firebaseapp.com",
  projectId: "ploutos-34",
  storageBucket: "ploutos-34.appspot.com",
  messagingSenderId: "1069838795073",
  appId: "1:1069838795073:web:15b2ca1d45badf311261c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <MainView />
    </IonApp>
  </Provider>
);

export default App;

import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import React from 'react';
import Login from '../pages/NonLogged/Login';
import { loginWithGoogle } from '../services/firebase.service';

interface INonLoggedLayout {
  setUser: (userIsLogged: boolean) => void;
}

const NonLoggedLayout: React.FC<INonLoggedLayout> = (props: INonLoggedLayout) => {
  return (
  <IonReactRouter>
    <Login onPress={() => loginWithGoogle().then((output: boolean) => {
      console.log('output')
      console.log(output)
      props.setUser(output)
    })}/>
  </IonReactRouter>
  )
}

export { NonLoggedLayout }
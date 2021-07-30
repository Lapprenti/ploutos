import { IonReactRouter } from '@ionic/react-router';
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
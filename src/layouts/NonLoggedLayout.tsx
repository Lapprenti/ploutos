import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import Login from '../pages/NonLogged/Login';
import { loginWithGoogle } from '../services/firebase.service';

import firebase from "firebase"
import "firebase/auth"
import IUser from '../interfaces/IUser';
import { loginUserAction } from '../store/user/Actions';

const NonLoggedLayout: React.FC = () => {
  const store = useStore();
  const dispatch = useDispatch();
  return (
  <IonReactRouter>
    <Login onPress={() => loginWithGoogle().then((output: firebase.auth.UserCredential) => {
      console.log('output')
      console.log(output)
      const user: IUser = {
        authMethods: ['google'],
        email: output.user?.email as string,
        username: output.user?.displayName as string,
        id: output.user?.uid,
        newUser: output.additionalUserInfo?.isNewUser
      }
      dispatch(loginUserAction(user))
    })}/>
  </IonReactRouter>
  )
}

export { NonLoggedLayout }
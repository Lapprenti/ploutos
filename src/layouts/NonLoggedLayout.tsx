import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import Login from '../pages/NonLogged/Login';
import { loginEmailPwd, loginWithGoogle } from '../services/firebase.service';

import firebase from 'firebase';
import 'firebase/auth';

import { loginUserAction } from '../store/user/Actions';
import { handleFirebasePayloadToIUser, handleFirebaseUserTypePayloadToIUser } from '../services/user.service';
import IUser from '../interfaces/IUser';

const NonLoggedLayout: React.FC = () => {
  const dispatch = useDispatch();
  const dispatchLoginUserAction = (user: IUser) => {
    dispatch(loginUserAction(user));
  };

  // Reprovide connected user to store on page reload.
  firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
    if (user) {
      const userRetrieved = handleFirebaseUserTypePayloadToIUser(user);
      console.log(`Previously connected user retrived, reconnecting ...`);
      dispatchLoginUserAction(userRetrieved);
      console.log(`Successfully reconnected user.`);
    }
  });

  const customLogin = (email: string, pwd: string) => {
    loginEmailPwd(email, pwd).then((output: any) => {
      const user = handleFirebasePayloadToIUser(output);
      dispatchLoginUserAction(user);
    });
  };

  const googleLogin = () => {
    loginWithGoogle().then((output: any) => {
      const user = handleFirebasePayloadToIUser(output);
      dispatchLoginUserAction(user);
    });
  };

  return (
    <IonReactRouter>
      <Login
        onGoogleLogin={() => googleLogin()}
        onCustomLogin={(email: string, pwd: string) => {
          console.log(email, pwd);
          customLogin(email, pwd);
        }}
      />
    </IonReactRouter>
  );
};

export { NonLoggedLayout };

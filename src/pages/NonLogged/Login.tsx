import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonImg,
  IonThumbnail,
  IonGrid,
  IonRow,
  IonText,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { Browser } from '@capacitor/browser';
// import { useForm, Controller } from 'react-hook-form';
import { useIonFormState } from '../../../node_modules/react-use-ionic-form';
import './Login.css';

// set the default values for the controls
let initialValues = {
  email: null,
  pwd: null,
};

interface ILogin {
  onCustomLogin: (email: string, pwd: string) => void;
  onGoogleLogin: () => void;
}

const Login: React.FC<ILogin> = (props: ILogin) => {
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  let { state, reset, item } = useIonFormState({
    email: null,
    pwd: null,
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonThumbnail slot="end">
            <IonImg src="./assets/icon/logox1.png"></IonImg>
          </IonThumbnail>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid class="grid">
          {/* Login or signup with google */}
          <IonRow>
            <IonCol class="ion-text-center">
              <IonText className="title" color="dark">
                Bienvenue !
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="ion-text-center">
              <IonButton
                onClick={() => props.onGoogleLogin}
                className="btn-login-with-google"
                color="dark"
                size="large"
              >
                Se connecter via google
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="ion-text-center">
              <IonText onClick={() => openGoogleSupportPage()} onTouchStart={() => openGoogleSupportPage()}>
                Des difficultés à vous connecter ?
              </IonText>
            </IonCol>
          </IonRow>
          {/* Separator */}
          <IonRow>
            <IonCol class="ion-text-center">
              <IonText class="text-separator" color="secondary">
                OU
              </IonText>
            </IonCol>
          </IonRow>
          {/* Login or sign up custom */}
          <form>
            <IonRow>
              <IonCol class="ion-text-center label-container">
                <IonItem class="">
                  <IonLabel position="floating">Email</IonLabel>
                  {/* <IonInput placeholder="type here" type="email"></IonInput> */}
                  {item({
                    name: 'email',
                    label: 'Email',
                    // override default Label renderer
                    renderLabel: (props) => <IonLabel position="floating">Email</IonLabel>,
                    renderContent: (props) => <IonInput type="email" {...props} />,
                  })}
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="ion-text-center label-container">
                <IonItem class="">
                  <IonLabel position="floating">Mot de passe</IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="ion-text-center">
                <IonButton type="submit" className="btn-login-custom" color="dark" size="large">
                  Se connecter
                </IonButton>
              </IonCol>
            </IonRow>
          </form>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const openGoogleSupportPage = async () => {
  await Browser.open({ url: 'https://support.google.com/accounts/troubleshooter/2402620?hl=fr' });
};

export default Login;

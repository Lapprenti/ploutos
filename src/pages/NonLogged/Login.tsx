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
import { useForm } from 'react-hook-form';
import './Login.css';

import { Browser } from '@capacitor/browser';

interface ILogin {
  onCustomLogin: (email: string, pwd: string) => void;
  onGoogleLogin: () => void;
}

let email: string;
let pwd: string;

const Login: React.FC<ILogin> = (props: ILogin) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: null, pwd: null },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonRow>
              <IonCol class="ion-text-center label-container">
                <IonItem class="">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput defaultValue="" placeholder="type here" type="email"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="ion-text-center label-container">
                <IonItem class="">
                  <IonLabel position="floating">Mot de passe</IonLabel>
                  <IonInput value={pwd} type="password"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="ion-text-center">
                <IonButton
                  onClick={() => {
                    console.log(email, pwd);
                    props.onCustomLogin(email, pwd);
                  }}
                  className="btn-login-custom"
                  color="dark"
                  size="large"
                >
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

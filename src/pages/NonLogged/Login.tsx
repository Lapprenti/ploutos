import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonThumbnail } from '@ionic/react';

interface ILogin {
  onPress?: () => void;
}

const Login: React.FC<ILogin> = (props: ILogin) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonThumbnail slot="end">
            <IonImg src="./assets/icon/logox1.png"></IonImg>
          </IonThumbnail>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle>Bienvenue</IonTitle>
        <IonButton color="warning" onClick={props.onPress}>Se connecter</IonButton>
      </IonContent>
    </IonPage>
  );
};


export default Login;

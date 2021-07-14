import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

interface ILogin {
  onPress?: () => void;
}

const Login: React.FC<ILogin> = (props: ILogin) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton color="warning" onClick={props.onPress}>Se connecter</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

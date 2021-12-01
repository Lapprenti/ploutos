import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonThumbnail,
  IonGrid,
  IonRow,
  IonText,
  IonCol,
} from '@ionic/react';
import './Login.css';

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
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol class="ion-text-center">
              <h1>Bienvenue !</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="ion-text-center">
              <IonButton
                onClick={props.onPress}
                className="btn-login-with-google"
                color="dark"
                size="large"
                strong={true}
              >
                Se connecter via google
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

// const loginPageStyle: CSS.Properties = {
//   borderRadius: '50px',
//   color: 'var(--ion-color-medium)',
// };

export default Login;

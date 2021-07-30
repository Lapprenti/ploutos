import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import {colors} from '../../theme/mainColors';

interface ILogin {
  onPress?: () => void;
}

const Login: React.FC<ILogin> = (props: ILogin) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={colors['French Sky Blue']}>
          <IonTitle>Bienvenue</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton color="warning" onClick={props.onPress}>Se connecter</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

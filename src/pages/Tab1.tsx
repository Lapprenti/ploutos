import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useDispatch } from 'react-redux';
import ExploreContainer from '../components/ExploreContainer';
import { logout } from '../services/firebase.service';
import { logoutUserAction } from '../store/user/Actions';
import './Tab1.css';

const Tab1: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <button onClick={() => logout().then(() => dispatch(logoutUserAction()))}>Se deconnecter</button>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

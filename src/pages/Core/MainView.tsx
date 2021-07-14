
import { useState } from 'react';
import { LoggedLayout } from '../../layouts/LoggedLayout';
import { NonLoggedLayout } from '../../layouts/NonLoggedLayout';
import { loginWithGoogle } from '../../services/firebase.service';

const MainView: React.FC = () => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  console.log("userIsLogged")
  console.log(userIsLogged)
  return (userIsLogged ? <LoggedLayout /> : <NonLoggedLayout setUser={setUserIsLogged}/>)
};

export default MainView;
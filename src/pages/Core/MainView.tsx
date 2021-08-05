
import { LoggedLayout } from '../../layouts/LoggedLayout';
import { NonLoggedLayout } from '../../layouts/NonLoggedLayout';
import IUser from '../../interfaces/IUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/combinedReducers';

const MainView: React.FC = () => {
  const userFromStore: IUser | null = useSelector((state: RootState) => state.user.user);
  return (userFromStore ? 
    <LoggedLayout /> 
  : 
    <NonLoggedLayout />
  )
};

export default MainView;
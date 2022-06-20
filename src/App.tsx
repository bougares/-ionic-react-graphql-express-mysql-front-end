import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, list, square, statsChart, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import UserList from './pages/UserList';
import { User, UserState } from './store/types';
import { useSelector } from 'react-redux';
import { Dispatch, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getList } from './store/user/actions';
import { getUsers } from './data/dataApi';
import UserDetail from './pages/UserDetail';

setupIonicReact();

const App: React.FC = () =>  {
  const users: User[] = useSelector(
    (state: UserState) => state.users
  );
const [usersList , setUsers] =useState([])
   const dispatch: Dispatch<any> = useDispatch();
 
   useEffect(() => {
  getUsers().then(res => setUsers(res))
    // eslint-disable-next-line
  }, []);
      
  return (
  <IonApp>
    <IonReactRouter>
   
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/user-list">
            <UserList users = {usersList} />
          </Route>
          <Route exact path="/user-list/details/:id">
            <UserDetail />
          </Route>
          <Route exact path="/note-mean">
          <UserList users = {usersList} />
          </Route>
         
          <Route exact path="/">
            <Redirect to="/user-list" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="user-list" href="/user-list">
            <IonIcon icon={list} />
            <IonLabel>Users</IonLabel>
          </IonTabButton>
          <IonTabButton tab="note-mean" href="/note-mean">
            <IonIcon icon={statsChart} />
            <IonLabel>Notes</IonLabel>
          </IonTabButton>
         
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
}
export default App;

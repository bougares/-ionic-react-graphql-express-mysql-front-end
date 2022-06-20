import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import userItem from '../components/UserItem';

import { Session } from '../models/Schedule';

import './UserList.scss';
import UserItem from '../components/UserItem';
import { connect } from 'http2';
import { User, UserState } from '../store/types';

type Props = {
  users: User[];
 
};

const userList: React.FC<Props> = ({ users }) => {
console.log(users)
  return (
    <IonPage id="user-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>users</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">users</IonTitle>
          </IonToolbar>
        </IonHeader>

          <IonGrid fixed>
            <IonRow>
              {users.map(user => (
                <IonCol size="12" size-md="6" key={user.id}>
                  <UserItem
                    key={user.id}
                    user={user}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default userList
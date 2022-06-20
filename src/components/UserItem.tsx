import React from 'react';
import { Session } from '../models/Schedule';
import { User } from '../models/User';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';


interface UserItemProps {
  user: User;

}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <>
      <IonCard className="user-card">
        <IonCardHeader>
          <IonItem button detail={false} lines="none" className="user-item" routerLink={`/user-list/details/${user.id}`}>
          
            <IonLabel>
              <h2>{user.last_name}</h2>
              <p>{user.email}</p>
            </IonLabel>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonList lines="none">
            <IonItem detail={false} routerLink={`/tabs/users/${user.id}`}>
              <IonLabel>
                <h3>About {user.last_name} {user.first_name}</h3>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default UserItem;
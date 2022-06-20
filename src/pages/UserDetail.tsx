import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useParams } from 'react-router-dom';
import './UserDetail.scss';

import { ActionSheetButton } from '@ionic/core';
import { IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage } from '@ionic/react'
import { callOutline, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp } from 'ionicons/icons';


import { User } from '../models/User';
import { getUsersbyId } from '../data/dataApi';
type Props = {

 
};

const UserDetail: React.FC<Props> = ({ }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');
  const [user, setUser] = useState<User>();
const {id} = useParams<{ id: string }>();
 
useEffect(() => {
  getUsersbyId(Number(id)).then(res => setUser(res))
    // eslint-disable-next-line
  }, []);

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <IonPage id="user-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/users" />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" ios={callOutline} md={callSharp}></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="user-background">

          <h2>{user.last_name} {user.first_name}</h2>
        </div>

        <div className="ion-padding user-detail">
          <p>{user.adresse} Say hello on social media!</p>

          <hr />



        </div>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default UserDetail;



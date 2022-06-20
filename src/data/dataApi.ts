
import axios from 'axios';
import { query } from 'gql-query-builder';
import { Schedule, Session } from '../models/Schedule';
import { User } from '../models/User';



const dataUrl = 'http://localhost:3000/graphql';


const HAS_LOGGED_IN = 'hasLoggedIn';
const HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
const USERNAME = 'username';
 export  const  getUsers  = () => {

 return  axios.post(dataUrl, query({
    operation: 'users',
    fields: ['id', 'last_name', 'first_name','email','adresse','note']
  }))
    .then((response) => {
      
      return response.data.data.users
     
    })
    .catch((error) => {
    
      return []
   
  })
  
 }

 export  const  getUsersbyId  = (id :number) => {

  return  axios.post(dataUrl, query({
     operation: 'user',
     variables: {id : id},
     fields: ['id', 'last_name', 'first_name','email','adresse','note']
   }))
     .then((response) => {
       
       return response.data.data.user
      
     })
     .catch((error) => {
     
       return null
    
   })
   
  }
 
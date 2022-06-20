import {
  
    ADD_USER,
   GET_MEAN_NOTE ,
   GET_USER_DETAILS ,
    GET_USER_BY_EMAIL,
    GET_USERS,
    UserActionTypes,
    UserState
} from '../types'
import {User} from '../types'

const UsersInitialState = {
    users: []
  }
  export const usersReducer = (state : UserState = UsersInitialState, action : UserActionTypes ) => { 

    switch (action.type) {
        case GET_USERS:
          
            return {...state, users : action.payload}
       
        default:
            return state
    }
}
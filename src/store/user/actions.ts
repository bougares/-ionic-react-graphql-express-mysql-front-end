// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import { Dispatch } from 'redux'
import { getUsers } from '../../data/dataApi'
import { GET_USERS, User } from '../types'


// Actions

// Get list of Users
export async function getList() {

  let Users = await getUsers()

 console.log(Users)

    return await {
      type: GET_USERS,
      payload : Users
    }
  
}


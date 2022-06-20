export const ADD_USER = 'ADD_COLOR'
export const GET_USER_DETAILS = 'GET_USER_DETAILS'
export const GET_USERS = 'GET_USERS'
export const GET_USER_BY_EMAIL = 'GET_USER_BY_EMAIL'
export const GET_MEAN_NOTE = 'GET_MEAN_NOTE'

export interface User {
    id: number
    last_name: string
    first_name: string
    email: string
    adresse: string
    note: number
}

export interface UserState {
    users: User[]
}
interface GetUserAction {
    type: typeof GET_USERS
    payload: User[]
}
interface AddUserAction {
    type: typeof ADD_USER
    payload: string
}


export type UserActionTypes = AddUserAction | GetUserAction
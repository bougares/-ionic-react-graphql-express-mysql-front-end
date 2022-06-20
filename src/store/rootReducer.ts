import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { usersReducer } from './user/reducer';

export const rootReducer = combineReducers({
    users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
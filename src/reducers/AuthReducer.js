import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../Actions/types';

const INITAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: ''
};

export default (state = INITAL_STATE, action) => {
    console.log(action);
    
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
//you can test if you write the action name write because it doesn't show errors
//is to add ---> console.log('action!') <--- or something like that 
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, error: ''}; 
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed'}
        default:
            return state;
    }
};
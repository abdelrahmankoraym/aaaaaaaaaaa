import React from 'react';
import {Text} from 'react-native';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL   
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged =(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const LoginUser = ({email, password}) => {
    state = { data: ''}
    
    //const dispatch = {dispatch};

    
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            onChange = (state) => {
                this.setState({
                    data: responseJson
                })
            }
        })
        .catch((error) => {
            console.error(error)
        });
    }
     //  return (dispatch) => { 
            if ( email === data.email && password === data.password ){
                return (dispatch) => {
                    user => loginUserSuccess(dispatch,user);
                }
            }
            else{
                return (dispatch) => {
                    (error) => {
                        console.error(error)
                        .then( () => loginUserFail(dispatch));
                    }
                };
        }

}

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}




















/*

import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL   
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged =(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const LoginUser = () => {
    state = { data: ''}
    
    //const dispatch = {dispatch};

    return{
        componentDidMount(dispatch){
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                onChange = (state) => {
                    this.setState({
                        data: responseJson
                    })
                }
            })
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error) => {
                console.error(error)
                .then( () => loginUserFail(dispatch))
            });
        }
    }
 
}

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}
*/
/*
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL   
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged =(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const LoginUser = () => {
    state = { data: ''}
    //return(dispatch) =>{
        const dispatch = {dispatch};

        componentDidMount = (dispatch) => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                onChange = (state) => {
                    this.setState({
                        data: responseJson
                    })
                }
            })
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error) => {
                console.error(error)
                .then( () => loginUserFail(dispatch))
            });
        }
    return(dispatch);
 
}

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}
*/
/* 

import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL   
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged =(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const LoginUser = () => {
    state = { data: ''}
    return(dispatch) =>{
        componentDidMount = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                onChange = (state) => {
                    this.setState({
                        data: responseJson
                    })
                }
            })
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error) => {
                console.error(error)
                .then( () => loginUserFail(dispatch))
            });
        }
    }
 
}

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}

*/
/*
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS   
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged =(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const LoginUser = () => {
    state = {
        data: ''
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            onChange = (state) => {
                this.setState({
                    data: responseJson
              })
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return(componentDidMount);   
}
*/

// we will replace firebase with api
/*
import {firebaseApp} from './authentication';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED   
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged =(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const LoginUser = ({email, password}) => {
    return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user});
            });
    };
};
*/
/*
import data from './test.json';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED   
} from './types';

goForFetch = () => {
    this.setState({
        fromFetch: true,
        loading: true,

    })
    fetch(data)
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson)
            setTimeout(() => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            }, 2000)

        })
        .catch(error => console.log(error))
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged =(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const LoginUser = ({email, password}) => {
    return(goForFetch);
        
}
*/

/*
import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
               {this.state.data.body}
            </Text>
         </View>
      )
   }
}
export default HttpExample
*/
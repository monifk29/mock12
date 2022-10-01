import * as types from './actionTypes'

const initialState = {
article : [],
isLoading: false,
isError: false,
}

export const reducer = (state = initialState,action) => {
const {type,payload} = action

switch(type) {
case types.GET_ARTICLES_REQ: {
return {
...state,
isLoading : true,
isError : false
}
}
case types.GET_ARTICLES_SUCCESS : {
return {
...state,
article : payload,
isLoading : false,
isError : false
}
}
case types.GET_ARTICLES_FAIL : {
return {
...state,
isLoading : false,
isError : true
}
}
default :
return state
}
};


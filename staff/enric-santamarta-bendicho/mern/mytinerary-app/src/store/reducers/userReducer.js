const initialState = {
    email: '',
    name: '',
    foto: '',
    registerIn:false,
    loggedIn:false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_USER': {
            return {
                ...state,
                registerIn:true
            }
        }
        case 'REGISTER_USER_ERROR': {
            return {
                ...state,
                error: action.payload
            }
        }
        case 'USER_AUTHENTICATED': {
            return {
                ...state,
                loggedIn: true
            }
        }
        case 'USER_AUTHENTICATION_ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        case 'CURRENT_USER': {
            return{
                ...state
            }
        }
        default:
            return state
    }
}

export default userReducer
const initialState = {
    email: '', 
    username: '', 
    password: '', 
    foto: ''
}

function createAccountReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER": {
            return {
                ...state,
                email: action.payload,
                username: action.payload,
                password:action.payload,
                foto:action.payload
            }
        }
        case "ADD_USER_ERROR": {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default createAccountReducer
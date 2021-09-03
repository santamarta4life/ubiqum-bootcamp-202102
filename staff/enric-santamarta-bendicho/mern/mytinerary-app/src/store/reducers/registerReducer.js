const initialState = {
    account: []
}

function registerReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ACCOUNT": {
            return {
                ...state,
                account: action.payload
            }
        }
        case "ADD_ACCOUNT_ERROR": {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default registerReducer
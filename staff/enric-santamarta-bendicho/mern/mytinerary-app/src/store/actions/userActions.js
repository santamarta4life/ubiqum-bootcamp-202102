import registerUser from '../../logic/register-user'
import authenticateUser from '../../logic/authenticate-user'
import retrieveCurrentUser from '../../logic/retrieve-current-user'

export function registerUserAccount(name, email, password, foto) {
    return dispatch => {
        registerUser(name, email, password, foto)
            .then(() =>
                dispatch({
                    type: "REGISTER_USER"
                }))
            .catch(error =>
                dispatch({
                    type: "REGISTER_USER_ERROR",
                    payload: error.message
                }))
    }
}

export function authenticateUserAccount(email, password) {
    return async dispatch => {
        try {
            await authenticateUser(email, password)
            dispatch({ type: 'USER_AUTHENTICATED' })
        } catch (error) {
            dispatch({ type: 'USER_AUTHETNICATION_ERROR', error: error.message })
        }
    }
}

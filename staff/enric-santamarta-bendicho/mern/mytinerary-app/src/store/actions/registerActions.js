import registerAccount from '../../logic/register-account'

export function registerUserAccount(username, email, password) {
    return dispatch => {
        registerAccount(username, email, password)
            .then((token) =>
                dispatch({
                    type: "ADD_ACOUNT",
                    payload: { token }
                }))
            .catch(error =>
                dispatch({
                    type: "ADD_ACCOUNT_AUTHENTIFICATION",
                    payload: error.message
                }))
    }
}
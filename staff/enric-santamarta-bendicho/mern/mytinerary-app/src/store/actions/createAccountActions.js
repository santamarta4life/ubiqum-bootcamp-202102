import createUser from '../../logic/create-user'

export function createAccount(username, email, password, foto) {
    return dispatch => {
        createUser(username, email, password, foto)
            .then((username, email, password, foto) =>
                dispatch({
                    type: "ADD_USER",
                    payload: username, email, password, foto
                }))
            .catch(error =>
                dispatch({
                    type: "ADD_USER_ERROR",
                    payload: error.message
                }))
    }
}
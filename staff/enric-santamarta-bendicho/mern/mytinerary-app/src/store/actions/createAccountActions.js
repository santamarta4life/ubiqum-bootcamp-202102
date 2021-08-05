import postUserData from '../../logic/post-user-data'

export function createAccount(username,email,userpassword,foto) {
    return dispatch => {
        postUserData(username,email,userpassword,foto)
            .then((username,email,userpassword,foto) =>
                dispatch({
                    type: "ADD_USER",
                    payload: username,email,userpassword,foto
                }))
                .catch(error =>
                    dispatch({
                        type: "ADD_USER_ERROR",
                        payload: error.message
                    }))
        }
    }
import { deleteUserAction, setUserAction } from "../actions/setUserAction"

export const setUser = (user) => {
    return {
        type: setUserAction,
        user: user
    }
}

export const deleteUser = (user) => {
    return {
        type: deleteUserAction,
        user: user
    }
}
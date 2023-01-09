import { deleteUserAction, setUserAction } from "../actions/setUserAction";

const initialState = {
    name: null,
    isAuth: false
}

export const UserReduser = (state = initialState, action) => {
    switch (action.type){
        case setUserAction:{
            return {
                ...state, name: action.user, isAuth:true
            }
        }
        case deleteUserAction:{
            return {
                ...state, name: null, isAuth:false
            }
        }
        default: {
            return state;
        }
    }
}

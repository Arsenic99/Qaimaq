import Admin from "./admin"
import { connect } from "react-redux";
import { deleteUser, setUser } from "../redux/actioncreators/setUserActionCreator";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user)=>{
            dispatch(setUser(user))
        },
        deleteUser: (user)=>{
            dispatch(deleteUser(user))
        }
    }
}

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);
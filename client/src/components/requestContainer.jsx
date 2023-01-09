import { connect } from "react-redux";
import Request from "./request";

const mapStateToProps = (state) => {
    return{
        service: state.request.RequestServices,
        price: state.request.RequestPrice,
    }
}

export const RequestContainer = connect(mapStateToProps)(Request);
import { connect } from 'react-redux'
import Services from './services'

const mapStateToProps = (state) => {
    return {
        services: state.service,
    }
}


export const ServicesContainer = connect(mapStateToProps)(Services);
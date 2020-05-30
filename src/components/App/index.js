import { connect } from 'react-redux';

import App from './App';
import { adverts } from '../../store/reducers';
 
function mapStateToProps(state, ownProps) {
    return {
        adverts: state.adverts
    };
}

const connected = connect(mapStateToProps);
const AppConnected = connected(App);

export default AppConnected;

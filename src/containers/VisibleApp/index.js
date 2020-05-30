import { connect } from 'react-redux'
import App from '../../components/App/App';
import { setSession } from '../../store/actions';
import LocalStorage from '../../utils/Storage';


const mapStateToProps = state => ({
  session2: state.session,
});

const mapDispatchToProps = dispatch => ({
  login: (session, isRemember, cb) => {
    if (isRemember) {
      LocalStorage.saveLocalStorage(session);
    }
    console.log(session)
    dispatch(setSession(session));
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
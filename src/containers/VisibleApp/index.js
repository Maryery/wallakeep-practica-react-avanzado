import { connect } from 'react-redux'
import App from '../../components/App/App';
import { setSession, logout } from '../../store/actions';
import LocalStorage from '../../utils/Storage';


const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  login: (session, isRemember, cb) => {
    if (isRemember) {
      LocalStorage.saveLocalStorage(session);
    }
    console.log(session)
    dispatch(setSession(session));
    dispatch(cb);
  },
  logout: () => {
    dispatch(logout);
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
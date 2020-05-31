import { connect } from 'react-redux'
import App from '../../components/App/App';
import { setSession, logout, createAdvert, editAdvert } from '../../store/actions';
import LocalStorage from '../../utils/Storage';


const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  login: (session, isRemember, cb) => {
    if (isRemember) {
      LocalStorage.saveLocalStorage(session);
    }
    dispatch(setSession(session));
    dispatch(cb);
  },
  logout: () => {
    dispatch(logout);
  },
  createAd: (advert, apiUrl, history) => {
    console.log(advert)
    dispatch(createAdvert(advert, apiUrl, history));
  },
  editAd: (advert, apiUrl, history) => {
    console.log(advert)
    dispatch(editAdvert(advert, apiUrl, history));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
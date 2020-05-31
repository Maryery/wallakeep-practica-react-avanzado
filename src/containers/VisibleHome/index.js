import { connect } from 'react-redux'
import Home from '../../components/Home/Home';
import { fetchAdverts } from '../../store/actions';

const mapStateToProps = state => ({
  adverts: state.adverts,
});

const mapDispatchToProps = dispatch => ({
  getAdverts: apiUrl => dispatch(fetchAdverts(apiUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
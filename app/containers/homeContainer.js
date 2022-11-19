import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from '../screens/home';
import * as workshopsActions from '../actions/workshopsActions';

const mapStateToProps = state => ({  
  workshops: state.workshops,
});

const actions = {  
  ...workshopsActions,
};

const mapDispatchToProps = dispatch => ({  
  actions: bindActionCreators(actions, dispatch),
});

export default connect(  
  mapStateToProps,  
  mapDispatchToProps,
)(Home);
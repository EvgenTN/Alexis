import React from 'react';
import { connect } from 'react-redux';
import { AboutComp } from '../../components';
import * as dataActions from '../../actions/dataAction';

class About extends React.Component {
  render() {
    // console.log(this.props)
    const {
      changeActivePage,
      match,
    } = this.props;
    changeActivePage(match.path);
    return (
      <AboutComp />
    )
  }
}



const mapStateToProps = (state) => {
  return{
    // section: state.data.section,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataActions.changeActivePage(path))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);
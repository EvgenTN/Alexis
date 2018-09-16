import React from 'react';
import { connect } from 'react-redux';
import { SectionTitle } from "../../components";
import data from '../../data/pricing.txt';
import * as dataAction from '../../actions/dataAction';

class Pricing extends React.Component {

  componentWillMount() {
    fetch(data)
      .then (response => response.json())
      .then ((pricing) => this.props.addData(
        {
          pricing
        }
      ))
  }

  render() {
    // console.log(this.props);
    const {
      section,
      match,
      getSection,
      changeActivePage,
    } = this.props;
    
    changeActivePage(match.path);
    return (
      <React.Fragment>
        <SectionTitle
          section={getSection(section, match.path)}
        />
      </React.Fragment>
    )
  }
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    pricing: state.data.pricing,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: data =>  dispatch(dataAction.addData(data)),
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pricing);

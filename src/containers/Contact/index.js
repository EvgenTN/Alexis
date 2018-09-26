import React from 'react';
import { connect } from "react-redux";
import { SectionTitle } from "../../components";
import * as dataAction from "../../actions/dataAction";



class Contact extends React.Component {


  render() {
    const {
      section,
      match,
      getSection,
      changeActivePage,
    } = this.props;

    changeActivePage(match.path);
    return (
      <section className="contact background2">
        <SectionTitle section={getSection(section, match.path)} />
      </section>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    section: state.data.section,
    getSection: state.data.getSection,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
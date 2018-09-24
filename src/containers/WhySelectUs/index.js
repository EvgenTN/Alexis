import React from "react";
import { connect } from "react-redux";
import * as dataAction from "../../actions/dataAction";
import data from "../../data/whySelectUs.txt"
import {
  SectionTitle,
  ItemWhySelectUs,
} from "../../components";

import * as images from "../../assets/images";

class WhySelectUs extends React.Component {





  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then(whySelectUs => this.props.addData({ whySelectUs })
      )
  }

  render() {
    const {
      section,
      getSection,
      changeActivePage,
      match,
      whySelectUs,
    } = this.props;

    // console.log(this.props)
    changeActivePage(match.path);
    return (
      <section className="whySelectUs">
        <div className="wrapper">
          <SectionTitle
            section={getSection(section, match.path)}
          />
          <ItemWhySelectUs
            whySelectUs={whySelectUs}
            img= {images}
          />
        </div>
      </section>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    whySelectUs: state.data.whySelectUs,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
    addData: data => dispatch(dataAction.addData(data)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WhySelectUs);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataAction from "../../actions/dataAction";
import {
  SectionTitle,
} from '../../components';
import data from "../../data/blog";

class Blog extends Component {

  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then(blog => this.props.addData(
        {
          blog
        }
      ))
  }


  render() {
    const {
      section,
      match,
      getSection,
      changeActivePage,
      blog
    } = this.props;
    changeActivePage(match.path);
    // console.log(this.props)
    return (
      <section className="blog">
        <div className="wrapper">
          <SectionTitle section={getSection(section, match.path)} />
          
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    blog: state.data.blog,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
    addData: data => dispatch(dataAction.addData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
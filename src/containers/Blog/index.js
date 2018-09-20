import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataAction from "../../actions/dataAction";
import {
  SectionTitle,
  ItemArticle,
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

  filterArticle = (articles,activeArticle) => {
    return articles && articles.filter((item, id) => {return activeArticle != id})
  }

  render() {
    const {

      section,
      match,
      getSection,
      changeActivePage,
      blog,
      activeArticle
    } = this.props;
    changeActivePage(match.path);
    // console.log(this.props)
    return (
      <section className="blog">
        <div className="wrapper">
          <SectionTitle section={getSection(section, match.path)} />
          <div className='articles'>
            <ItemArticle
              blog={this.filterArticle(blog,activeArticle)}
            />
          </div>
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
    activeArticle: state.data.activeArticle,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
    addData: data => dispatch(dataAction.addData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
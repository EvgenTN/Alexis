import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataAction from "../../actions/dataAction";
import {
  SectionTitle,
  ItemArticle,
  ActiveArticle,
  Subscribe,
} from '../../components';
import data from "../../data/blog";

class Blog extends Component {

  state = {
    email: '',
  }

  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then(blog => this.props.addData(
        {
          blog
        }
      ))
  }

  filterArticle = (articles, activeArticle) => {
    return articles && articles.filter((item, id) => { return activeArticle !== id })
  };

  changeMail = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    })
  }

  addSubscribe = (email, e) => {
    e.preventDefault();
    // console.log('event', e.target.value);
    this.props.addSubscribeMail(email)
    this.setState({
      email: '',
    })
  }

  render() {
    const {
      section,
      match,
      getSection,
      changeActivePage,
      blog,
      activeArticle,
      changeActiveArticle,
      storeMail,
    } = this.props;
    changeActivePage(match.path);
    // console.log(this.props)
    return (
      <React.Fragment>
        <section className="blog background1">
          <div className="wrapper">
            <SectionTitle section={getSection(section, match.path)} />
            {
              blog &&
              <div className="row" >
                <div className="col-6" >
                  <ActiveArticle
                    className="col-6"
                    activeArticle={blog[activeArticle]}
                  />
                </div>
                <div className='col-6'>
                  <ItemArticle
                    blog={blog}
                    changeActiveArticle={changeActiveArticle}
                    activeArticle={activeArticle}
                  />
                </div>
              </div>
            }
          </div>
        </section>
        <Subscribe
          addSubscribe={this.addSubscribe}
          changeMail={this.changeMail}
          email={this.state.email}
          storeMail={storeMail}
        />
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  console.log('state.data', state.data);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    blog: state.data.blog,
    activeArticle: state.data.activeArticle,
    storeMail: state.data.mail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
    addData: data => dispatch(dataAction.addData(data)),
    changeActiveArticle: id => dispatch(dataAction.changeActiveArticle(id)),
    addSubscribeMail: mail => dispatch(dataAction.subscribe(mail)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
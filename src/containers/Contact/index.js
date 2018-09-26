import React from 'react';
import { connect } from "react-redux";
import {
  SectionTitle,
  ContactForm,
} from "../../components";
import * as dataAction from "../../actions/dataAction";



class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
  };

  addMessage = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'name':
        return this.setState({
          name: e.target.value,
        })
      case 'email':
        return this.setState({
          email: e.target.value,
        })
      case 'subject':
        return this.setState({
          subject: e.target.value,
        })
      case 'budget':
        return this.setState({
          budget: e.target.value,
        })
      case 'message':
        return this.setState({
          message: e.target.value,
        })
    }
  }

  render() {
    console.log('thisstate', this.state);
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
        <ContactForm
          addMessage={this.addMessage}
        />
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
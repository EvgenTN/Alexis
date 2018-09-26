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

  sendContact = (e) => {
    e.preventDefault();
    this.props.sendMessage({
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      budget: this.state.budget,
      message: this.state.message,
    });
    this.setState({
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: '',
    })
  }

  render() {
    // console.log('thisstate', this.state);
    const {
      section,
      match,
      getSection,
      changeActivePage,
      sendMessage,
    } = this.props;

    changeActivePage(match.path);
    return (
      <section className="contact background2">
        <SectionTitle section={getSection(section, match.path)} />
        <ContactForm
          addMessage={this.addMessage}
          sendContact={this.sendContact}
        />
      </section>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state.data);
  return {
    section: state.data.section,
    getSection: state.data.getSection,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
    sendMessage: message => dispatch(dataAction.sendMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
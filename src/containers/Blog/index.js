import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SectionTitle,
} from '../../components'

class Blog extends Component {
  render () {
    return (
      <SectionTitle />
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Blog);
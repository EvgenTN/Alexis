import React from 'react';
import { connect } from 'react-redux';
import {
  SectionTitle,
  SelectSlider
} from '../../components';
import * as dataAction from '../../actions/dataAction';


class Testimonials extends React.Component {
  state = {
    activeSlide: 0,
  };
  changeSlide = (id) => {
    this.setState({
      activeSlide: id,
    })
  }
  render() {
    // console.log('testimon', this.props);
    const {
      testimonials,
      getSection,
      section,
      match,
      changeActivePage
    } = this.props;
    const {
      activeSlide
    } = this.state;
    changeActivePage(match.path)

    setTimeout(() => {
      const nextSlide = (activeSlide === testimonials.length - 1) ? 0 : activeSlide + 1;
      console.log(activeSlide);
      this.changeSlide(nextSlide);
    }, 3000);
    // var a = 0;
    // setInterval(() => {
    //   console.log(a++);
    // }, 3000)

    return (
      <section className='testim'>
        <div className='wrapper'>
          <SectionTitle
            section={getSection(section, match.path)}
            theme={'dark'}
          />
          <SelectSlider
            item={testimonials[activeSlide]}
            changeSlide={this.changeSlide}
            testimonials={testimonials}
            activeSlide={activeSlide}
          />
        </div>

      </section>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    testimonials: state.data.testimonials
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
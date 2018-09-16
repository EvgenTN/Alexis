import React from 'react';
import { connect } from 'react-redux';
import {
  SectionTitle,
  SelectSlider
} from '../../components';
import * as dataAction from '../../actions/dataAction';


class Testimonials extends React.Component {
  // state = {
  //   activeSlide: 0,
  // // };
  // changeSlide = (activeSlide) => {
  //   const nextSlide = (activeSlide === testimonials.length - 1) ? 0 : activeSlide + 1;
  //   changeActivSlide(nextSlide)
  // }
  // componentDidMount(
  // setTimeout(() => {
  //   const nextSlide = (activeSlide === testimonials.length - 1) ? 0 : activeSlide + 1;
  //   console.log(activeSlide);
  //   this.changeSlide(nextSlide);
  // }, 3000)
  // );




  // changeSlide = (activeSlide) => {
  // const nextSlide = (activeSlide === this.props.testimonials.length - 1) ? 0 : activeSlide;
  //   this.props.changeActivSlide(activeSlide)
  // }

  showNextSlide = (activeSlide) => {
    console.log('sdfsdfsdfsdfs')
    const nextSlide = (activeSlide === this.props.testimonials.length - 1) ? 0 : activeSlide + 1;
    this.props.changeActivSlide(nextSlide);
  }

  timer = setInterval(() => {
    this.showNextSlide();
  }, 2000);

  // showSlideshow = () => {
  //   this.timer;
  // };


  render() {
    const {
      testimonials,
      getSection,
      section,
      match,
      changeActivePage,
      activeSlide,
      changeActivSlide
    } = this.props;

    changeActivePage(match.path);

    clearInterval(this.timer);

    // this.showSlideshow();

    return (
      <section className='testim'>
        <div className='wrapper'>
          <SectionTitle
            section={getSection(section, match.path)}
            theme={'dark'}
          />
          <SelectSlider
            item={testimonials[activeSlide]}
            changeSlide={changeActivSlide}
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
    testimonials: state.data.testimonials,
    activeSlide: state.data.activeSlide,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
    changeActivSlide: id => dispatch(dataAction.changeActivSlide(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
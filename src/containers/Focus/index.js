import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  icon_app,
  icon_photo,
  icon_ux,
  icon_web,

} from '../../assets/images'


import {
  Video,
  SectionTitle
} from '../../components';




class Focus extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     section: '',
  //   };
  // }

  // getSection = (arr, path) => {
  //   const filter = arr.filter(item => {      
  //     return item.href === path
  //   });
  //   return filter[0];
  // }


  render() {
    // console.log(this.props);
    // console.log(this.props.match.path);

    // console.log(this.state)

    const box = [
      {
        icon: icon_web,
        title: 'Web Design',
        text: 'Analytics release series A financing launch party interaction design android angel investor.',
        color: 'red',
      },
      {
        icon: icon_ux,
        title: 'UX Design',
        text: 'Analytics release series A financing launch party interaction design android angel investor.',
        color: 'green',
      },
      {
        icon: icon_photo,
        title: 'Web Design',
        text: 'Analytics release series A financing launch party interaction design android angel investor.',
        color: 'purpure',
      },
      {
        icon: icon_app,
        title: 'Web Design',
        text: 'Analytics release series A financing launch party interaction design android angel investor.',
        color: 'yellow',
      },

    ];
    const {
      section,
      match,
      getSection,
    } = this.props;



    return (
      <React.Fragment>
        <section className='focus'>
          <div className='wrapper'>
            <SectionTitle 
              section={
                getSection(section, match.path)
              }            
            />
            {/* <p className='focus__title title'>
            Our Focus.
        </p>
          <p className='focus__subtext'>
            We understand your requirement and provide quality works.
        </p> */}
            <div className='focus__boxes'>
              {
                box.map((item, id) => {
                  return (
                    <div
                      key={id}
                      className={`box ${item.color}`}
                    >
                      <div className='box__icon'>
                        <img src={item.icon} alt='aaa' />
                      </div>
                      <p className='box__title'>{item.title}</p>
                      <p className='box__text'>{item.text}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        <Video />
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
  }
}


export default connect(mapStateToProps)(Focus);
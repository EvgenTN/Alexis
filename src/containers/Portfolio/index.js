import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SectionTitle } from '../../components';

import {
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
} from '../../assets/images';

const img = [
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
];


function onFocusMouse() {
  console.log('sdf')
  return (
    <div className='portfolio__onFocusMouse'>
      <p>sdfsdfsdfsdfsdfsdf</p>
    </div>
  )
}


class Portfolio extends Component {
  render() {
    const {
      match,
      section,
      getSection,
    } = this.props;

    return (
      <section className='portfolio'>
        <div className='wrapper'>
          <SectionTitle
            section={getSection(section, match.path)}
          />
          <div className='container-fluid'>
            <div className='row'>
              {
                img.map((item, id) => {
                  return (
                    <div
                      className='col-4 portfolio__image'
                      key={id}
                      onMouseOver={() => onFocusMouse()}
                    >
                      <img
                        key={id}
                        alt={item}
                        src={item}
                      />
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    section: state.data.section,
    getSection: state.data.getSection,
  }
}

export default connect(mapStateToProps)(Portfolio);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SectionTitle } from '../../components';
import * as hoverAction from '../../actions/hoverAction';
import * as dataAction from '../../actions/dataAction';


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
  plus,
} from '../../assets/images';

const img = [
  {
    image: item_1,
    text: 'Project One'
  },
  {
    image: item_2,
    text: 'Project Two'
  },
  {
    image: item_3,
    text: 'Project Three'
  },
  {
    image: item_4,
    text: 'Project Four'
  },
  {
    image: item_5,
    text: 'Project Five'
  },
  {
    image: item_6,
    text: 'Project Six'
  },
  {
    image: item_7,
    text: 'Project Seven'
  },
  {
    image: item_8,
    text: 'Project Eight'
  },
  {
    image: item_9,
    text: 'Project 9'
  }

];


// function onFocusMouse(id) {
//   console.log(id)
//   return id
// }


class Portfolio extends Component {

  getActivePage = () => {

  }
  render() {

    // console.log('props', this.props)
    const {
      match,
      section,
      getSection,
      hover,
      hoverId,
      activePage,
    } = this.props;

    activePage(match.path);
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
                  // console.log(`id ${id}, hover ${hoverId}`)
                  return (
                    <div
                      className=' col-md-4 portfolio__image'
                      key={id}
                    >
                      <img
                        key={id}
                        alt={item.text}
                        src={item.image}
                        onMouseOver={() => hover(id)}
                      />
                      {
                        hoverId === id &&
                        <div
                          className='portfolio__onFocusMouse'
                          onMouseLeave={() => hover('null')}
                        >
                          <div className='portfolio__plus'>
                            <img src={plus} alt="plus" />
                          </div>
                          <div className='colorLine'></div>
                          <div className='portfolio__footer'>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      }
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
  // console.log('state', state);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    hoverId: state.hover.hoverId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    hover: id => dispatch(hoverAction.hover(id)),
    activePage: path =>dispatch(dataAction.changeActivePage(path)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);
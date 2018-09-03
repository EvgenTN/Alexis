import React, { Component } from 'react';
// import IMAGES from './images';
import { logo2x } from '../../assets/images';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/dataAction';


class Header extends Component {

  render() {
    // console.log(this.props);
    const {
      menu,
      activePage,
      changeActivePage,
    } = this.props;
    // console.log('props=>', this.props);
    return (
      <div className='header'>
        <nav className='header__navbar wrapper'>
          <NavLink
            to='/'
            onClick={() => changeActivePage('/')}
          >
            <div className='header__logo'>
              <img
                src={logo2x}
                alt='logo'
              />
            </div>
          </NavLink>
          <div className='header__container'>
            {
              menu &&
              menu.map((item, id) => {
                const active = item.href === activePage ? ' activePage' : '';
                return (
                  <div
                    className={`header__item${active}`}
                    key={id}
                  >
                    <NavLink
                      to={item.href}
                      onClick={() => changeActivePage(item.href)}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                )
              })
            }
          </div>
        </nav>
      </div>
    )
  }

}
const mapStateToPropps = (state) => {
  // console.log('header',state);
  return {
    menu: state.data.section,
    activePage: state.data.activePage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
  }
}

export default connect(mapStateToPropps, mapDispatchToProps)(Header)
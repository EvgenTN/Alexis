import React, { Component } from 'react';
// import IMAGES from './images';
import { logo2x } from '../../assets/images';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

  render() {
    // console.log(this.props);
    const {
      menu,
    } = this.props;
    return (
      <div className='header'>
        <nav className='navbar navbar-expand'>
          <NavLink className='logo navbar-brand' to='/'>
            <img
              src={logo2x}
              alt='logo'
            />
          </NavLink>
          {
            menu &&
            <div className='navbar-nav'>
              {menu.map((item, id) => {
                return (
                  <NavLink
                    key={id}
                    to={item.href}
                    className={`nav-item nav-link`}
                  >
                    {item.name}
                  </NavLink>
                )
              })}
            </div>
          }
        </nav>
      </div>
    )
  }

}
const mapStateToPropps = (state) => {
  // console.log(state);
  return {
    menu: state.data.section,
  }
}


export default connect(mapStateToPropps)(Header)
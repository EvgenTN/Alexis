import React, { Component } from 'react';
// import IMAGES from './images';
import { logo2x } from '../../assets/images';
import { NavLink } from 'react-router-dom';

// Testimonials     Blog     Contact


const menu = [
  // {
  //   name: 'Home',
  //   href: '/',
  //   exact: 'exact'
  // },

  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Our Focus',
    href: '/focus',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Work Steps',
    href: '/workSteps',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  }
];

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu,
    }
  }


  render() {
    const {
      menu,
    } = this.state;
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
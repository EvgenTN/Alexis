import React, { Component } from 'react';
// import IMAGES from './images';
import {logo2x} from '../../assets/images';

// Testimonials     Blog     Contact


const menu = [
  // {
  //   name: 'Home',
  //   href: '/',
  //   exact: 'exact'
  // },

  {
    name: 'About Us',
    href: '/aboutUs',
  },
  {
    name: 'Our Focus',
    href: '/ourFocus',
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
          <a className='logo navbar-brand' href='/'>
            <img
              src={logo2x}
              alt='logo'
            />
          </a>
          {
            menu &&
            <div className='navbar-nav'>
              {menu.map((item, id) => {
                return (
                  <a
                    key={id}
                    href={item.href}
                    className= {`nav-item nav-link ${item.exact}`}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          }
        </nav>
      </div>
    )
  }

}
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
// import { slide as Menu } from 'react-burger-menu'
import '../App.css';
import logo from "../images/logo.png"
const FontAwesome = require('react-fontawesome')


class Baselayout extends Component{
  constructor(props){
    super(props)
    this.state = {
      isTop: true,
    };
    this.burgerToggle=this.burgerToggle.bind(this);
  }
  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 100 })
    });
  }
  render(){

    return(
      <div>
        <div className='nav_bar_large' style={{ position: 'fixed',top:0, width:'100%', "background-color":'white'  }}>
          <div class="burger_icon">
            <button onClick={this.burgerToggle}>
              <FontAwesome id="bars" className='super-crazy-colors' name='bars' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            </button>
          </div>
          <div className={this.state.isTop ? 'nav_box_l':'nav_box_s'}>
            <NavLink style={{height:'100%'}} exact to="/"><img src={logo} alt="tsgo-logo" className="logo_img"/></NavLink>
            <nav style={{'text-align': 'right'}} id="nav" className={this.state.isTop ? 'nav_large':'nav_small'}>
              <NavLink exact to ="/" activeStyle={{"color": "black", "border-bottom":"2px solid orange"}}  id="nav_bar">Home</NavLink>
              <NavLink to ="/gallery" activeStyle={{"color": "black", "border-bottom":"2px solid orange"}} id="nav_bar" >Gallery</NavLink>
              <NavLink to ="/contact" activeStyle={{"color": "black", "border-bottom":"2px solid orange"}} id="nav_bar" >Contact</NavLink>
              <NavLink to ="/about" activeStyle={{"color": "black", "border-bottom":"2px solid orange"}} id="nav_bar" >About Us</NavLink>
              <NavLink to ="/pricing" activeStyle={{"color": "black", "border-bottom":"2px solid orange"}} id="nav_bar" >Pricing</NavLink>
              <NavLink to ="/login" activeStyle={{"color": "black", "border-bottom":"2px solid orange"}} id="nav_bar" >Login</NavLink>
            </nav>
            <div className="narrowLinks burger_menu_box">
              <nav id="nav_burger " className="burger_menu" >
                <NavLink exact to ="/"   id="nav_bar" onClick={this.burgerToggle}>Home</NavLink>
                <NavLink to ="/gallery"  id="nav_bar" onClick={this.burgerToggle}>Gallery</NavLink>
                <NavLink to ="/contact"  id="nav_bar" onClick={this.burgerToggle}>Contact</NavLink>
                <NavLink to ="/about"  id="nav_bar" onClick={this.burgerToggle}>About Us</NavLink>
                <NavLink to ="/pricing" id="nav_bar" onClick={this.burgerToggle}>Pricing</NavLink>
                <NavLink to ="/login"  id="nav_bar" onClick={this.burgerToggle}>Login</NavLink>
                <button onClick={this.burgerToggle}>
                  <FontAwesome id="chevron-up" className='super-crazy-colors' name='chevron-up' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div style={{"margin-top": "80px","z-index":0}}>
          {this.props.children}
        </div>
        <div>
          <footer>
            <div>
              <h5>LINKS</h5>
              <h6>Terms and Condition</h6>
              <h6>Privacy Policy</h6>
            </div>
            <div>
              <h5>CONTACT</h5>
              <h6>Email: contact@timesheetsgo.com</h6>
              <h6>United States of America</h6>
            </div>
            <div>
              <h5>SEARCH</h5>
              <input type="text" name="search" placeholder="Search.." />
              <button type="submit"><FontAwesome id="search" className='super-crazy-colors search_bt' name='search' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
            </div>
          </footer>
          <div className="copyright_div">
            <p><small>&copy;copyright 2017 RONALD HONG ALL RIGHTS RESERVED</small></p>
          </div>
        </div>

      </div>

    )
  }
}
export default (Baselayout);

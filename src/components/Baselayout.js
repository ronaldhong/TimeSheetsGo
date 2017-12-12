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
        <div className='nav_bar_large' style={{ position: 'fixed',top:0, width:'100%', "backgroundColor":'white'  }}>
          <div className="burger_icon">
            <button onClick={this.burgerToggle}>
              <FontAwesome id="bars" className='super-crazy-colors' name='bars' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            </button>
          </div>
          <div className={this.state.isTop ? 'nav_box_l':'nav_box_s'}>
            <NavLink style={{height:'100%'}} exact to="/"><img src={logo} alt="tsgo-logo" className="logo_img"/></NavLink>
            <nav style={{'textAlign': 'right'}} id="nav" className={this.state.isTop ? 'nav_large':'nav_small'}>
              <NavLink exact to ="/TimeSheetsGo/" activeStyle={{"color": "black", "borderBottom":"2px solid orange"}}  id="nav_bar">Home</NavLink>
              <NavLink to ="/TimeSheetsGo/gallery" activeStyle={{"color": "black", "borderBottom":"2px solid orange"}} id="nav_bar" >Gallery</NavLink>
              <NavLink to ="/TimeSheetsGo/contact" activeStyle={{"color": "black", "borderBottom":"2px solid orange"}} id="nav_bar" >Contact</NavLink>
              <NavLink to ="/TimeSheetsGo/about" activeStyle={{"color": "black", "borderBottom":"2px solid orange"}} id="nav_bar" >About Us</NavLink>
              <NavLink to ="/TimeSheetsGo/pricing" activeStyle={{"color": "black", "borderBottom":"2px solid orange"}} id="nav_bar" >Pricing</NavLink>
              <NavLink to ="/TimeSheetsGo/login" activeStyle={{"color": "black", "borderBottom":"2px solid orange"}} id="nav_bar" >Login</NavLink>
            </nav>
            <div className="narrowLinks burger_menu_box">
              <nav id="nav_burger " className="burger_menu">
                <NavLink exact to ="/TimeSheetsGo/" activeStyle={{"color": "black"}}   className="buger_menu_style" onClick={this.burgerToggle}><FontAwesome id="home" className='super-crazy-colors' name='home' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Home</NavLink>
                <NavLink to ="/TimeSheetsGo/gallery" activeStyle={{"color": "black"}}  className="buger_menu_style" onClick={this.burgerToggle}><FontAwesome id="image" className='super-crazy-colors' name='image' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Gallery</NavLink>
                <NavLink to ="/TimeSheetsGo/contact" activeStyle={{"color": "black"}} className="buger_menu_style" onClick={this.burgerToggle}><FontAwesome id="phone" className='super-crazy-colors' name='phone' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Contact</NavLink>
                <NavLink to ="/TimeSheetsGo/about" activeStyle={{"color": "black"}} className="buger_menu_style" onClick={this.burgerToggle}><FontAwesome id="info-circle" className='super-crazy-colors' name='info-circle' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> About Us</NavLink>
                <NavLink to ="/TimeSheetsGo/pricing" activeStyle={{"color": "black"}} className="buger_menu_style" onClick={this.burgerToggle}><FontAwesome id="tag" className='super-crazy-colors' name='tag' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Pricing</NavLink>
                <NavLink to ="/TimeSheetsGo/login" activeStyle={{"color": "black"}} className="buger_menu_style" onClick={this.burgerToggle}><FontAwesome id="sign-in" className='super-crazy-colors' name='sign-in' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Login</NavLink>
                <button onClick={this.burgerToggle}>
                  <FontAwesome id="chevron-up" className='super-crazy-colors' name='chevron-up' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div style={{"marginTop": "80px","zIndex":0}}>
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
              <button type="submit" className="search_bt"><FontAwesome id="search" className='super-crazy-colors search_bt' name='search' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'black' }}/></button>
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

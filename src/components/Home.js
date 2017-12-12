import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../App.css';
import '../animate.css'
import iphone_black from "../images/iphone_black.png"
import Calendar_Ipad from "../images/Calendar-Ipad.png"
import bg_image from "../images/home.png"
import IMac from "../images/IMac.png"
import MacBookPro from "../images/MacBookPro.png"
import { Parallax } from 'react-parallax';
import InViewMonitor from 'react-inview-monitor'

const FontAwesome = require('react-fontawesome')


class Home extends Component{
  render(){
    let divStyle ={
      color:"#EFBB20"
    };
    let div_color_grey={
      color:"#9D9D9D",
      'fontSize':'.8em'
    }
    let div_contact_box={
      "textDecoration":"none"
    }
    return(
      <div>
        <div>
          <div className="Home_background_img"></div>
          <div className="Home_background_text Home_background_text_top">
            <p>TIME SHEETS</p>
          </div>
          <div className="Home_background_text Home_background_text_bottom">
            <p>ON THE GO</p>
          </div>
          <img src={iphone_black} alt="background-image" className="Home_background_img_s" />
          <img src={Calendar_Ipad} alt="background-image_large" className="Home_background_img_l" />
        </div>
        <div className="home_intro">
          <div className="home_intro_function">
            <h4><FontAwesome id="clock-icon" className='super-crazy-colors' name='clock-o' size='1.5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>  FUNCTIONS</h4>
            <p><span style={divStyle}>Simple</span>. The employee submits their timesheet through our website. The designated approver will be able to approve or decline the submitted timesheet.
              All time recordings can then be <span style={divStyle}>exported</span> to your accounting software. (Required export format can be arranged with us to meet any requirements).</p>
          </div>
          <div className="home_intro_function">
            <h4><FontAwesome id="mobile" className='super-crazy-colors' name='mobile' size='1.5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>   RESPONSIVE DESIGN</h4>
            <p>With our adaptable design, employees can clock in and clock out using almost <span style={divStyle}>any device</span>.  This makes time tracking and timesheet a simple process.</p>
          </div>
          <div className="home_intro_function">
            <h4><FontAwesome id="lightbulb-o" className='super-crazy-colors' name='lightbulb-o' size='1.5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>  ANALYSING TOOLS</h4>
            <p>Seamlessly view your company’s time records. <span style={divStyle}>Make critical business decisions</span> based on key metrics and compare them against historical data.</p>
          </div>
          <div className="home_intro_function">
            <h4><FontAwesome id="map-signs" className='super-crazy-colors' name='map-signs' size='1.5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>  PINPOINT YOUR TIME COSTS</h4>
            <p>Keep track of your labour costs, job costs and equipment costs easily with our <span style={divStyle}>multi-layered</span> time in-attendance system.</p>
          </div>
          <div className="home_intro_function">
            <h4><FontAwesome id="users" className='super-crazy-colors' name='users' size='1.5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>  USER MANAGEMENT</h4>
            <p>We empower you with the tools to manage your company’s user accounts (from de-activation to user statistics).</p>
          </div>
          <div className="home_intro_function">
            <h4><FontAwesome id="lightbulb-o" className='super-crazy-colors' name='lightbulb-o' size='1.5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>   CONTINUOUS SUPPORT</h4>
            <p>TimesheetsGO is designed to help your company <span style={divStyle}>save costs</span> by providing a <span style={divStyle}>great product</span> and more importantly, <span style={divStyle}>excellent service</span>. Feel free to contact us for any enquiries or a product demo and trial6</p>
          </div>
        </div>
        <div className="home_detail_box_l">
          <InViewMonitor classNameNotInView='' classNameInView='animated bounceInRight'>
            <img src={iphone_black} alt="iphone-black" height="290px" />
          </InViewMonitor>
          <div className="home_detail_box_dark">
            <h4><FontAwesome id="clock-icon" className='super-crazy-colors' name='clock-o' size='1.8x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> PAPER TIMESHEETS ARE HISTORY</h4>
            <div className="home_detail_box_content">
              <p>Submit your timesheet from anywhere in the world with these easy steps</p>
              <ol>
                <li>Enter your job code, cost centre details</li>
                <li>Enter your start and stop time</li>
                <li>Enter your break time</li>
                <li>Optionally provide a note to the approver</li>
                <li>Submit</li>
              </ol>
              <p>It is that simple. The app will do the heavy lifting for you!</p>
            </div>
          </div>
        </div>

        <div className="home_detail_box_r">
          <div className="home_detail_box_white" >
            <h4><FontAwesome id="star" className='super-crazy-colors' name='star' size='1.8x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>   MANAGE TIMESHEETS HAVE NEVER BEEN EASIER</h4>
            <div className="home_detail_box_content">
              <p style={div_color_grey}>Each submitted timesheet will be sent to the selected approver. The approver simply clicks approve or decline button.<br/><br/>When the approver is on leave, the authorised company representative can approve on their behalf.</p>
            </div>
          </div>
          <InViewMonitor classNameNotInView='' classNameInView='animated bounceInLeft'>
            <img src={IMac} alt="IMac" height="270px;"/>
          </InViewMonitor>
        </div>


        <div className="home_detail_box_l">
          <InViewMonitor
            classNameNotInView=''
             classNameInView='animated bounceInUp'>
            <img src={MacBookPro} alt="MacBookPro" height="200px" />
          </InViewMonitor>
          <div className="home_detail_box_dark">
            <h4><FontAwesome id="download" className='super-crazy-colors' name='download' size='1.8x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>   EXPORT TO YOUR ACCOUNTING SOFTWARE</h4>
            <div className="home_detail_box_content">
              <p>The approved timesheet can be exported for use with accounting software. TimesheetsGO currently supports CSV and XML format. We are happy to provide more formats to suit your business requirement.</p>
            </div>
          </div>
        </div>
        <div>
          <Parallax bgImage={bg_image} strength={400}>
            <br/><br/><br/><br/><br/><br/>
            <h2 className="home_contact_msg">START YOUR FREE TRIAL TODAY</h2>
            <div>
              <NavLink to ="/TimeSheetsGo/contact" style={div_contact_box} ><p className="home_contact_msg home_contact_box">Contact us</p></NavLink>
            </div>
            <br/><br/><br/><br/><br/><br/>
          </Parallax>
        </div>
      </div>

    )
  }
}
export default (Home);

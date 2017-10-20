import React, { Component } from 'react';
const FontAwesome = require('react-fontawesome')


class About extends Component{

  render(){
    let h2_style ={
      color:'#2C353D',
      'font-family':'Geneva, Tahoma, Verdana, sans-serif'
    }
    return(
      <div className="about_box">

        <div style={{'text-align':'right'}} className="about_div_box">
          <h2 style={h2_style}>ABOUT US</h2>
          <p style={{'color':'#919194','line-height':'200%'}}>
            TimesheetsGO is an American owned software solution company.
            <br/>
            Our vision is to reduce costs for your company by providing software solutions to reduce manual, repetitive administrative tasks.
            <br/>
            Our goal is to provide cost effective solutions and offer superior service to our customers.
          </p>
        </div>

        <div>
          <div style={{'padding-top':0}} className="about_div_box">
            <h4 style={h2_style}><FontAwesome id="user" className='super-crazy-colors' name='user' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', 'background-color':"#D0D0D0",color:'white', padding:"7px", "border-radius":"100%",width:'35px','text-align':'center' }}/>  DESIGN WITH PASSION</h4>
            <p style={{'color':'#919194','line-height':'150%'}}>Our Software Engineer has extensive experience in project management. Throughout his career as a project manager, he was often surprised by the number of mundane and routine tasks in his day to day work. His goal is to fill in that gap and provide a cost effective solution for customers.</p>
          </div>
          <div style={{'padding-top':'10px'}} className="about_div_box">
            <h4 style={h2_style}><FontAwesome id="star" className='super-crazy-colors' name='star' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)','background-color':"#D0D0D0",color:'white', padding:"7px", "border-radius":"100%",width:'35px','text-align':'center' }}/>  CLEAR VISION</h4>
            <p style={{'color':'#919194','line-height':'150%'}}>The owner of TimesheetsGO has used a variety of timesheet software. He was often frustrated by the lack of support received when he encountered a problem. He started this company with the vision to provide a well rounded timesheet solution for businesses.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default (About);

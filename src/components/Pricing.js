import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
const FontAwesome = require('react-fontawesome')



class Pricing extends Component{

  render(){

    return(
      <div >
        <div style={{'background-color':'#2C353D'}}>
          <div className="pricing_box" >
            <div className="pricing_box_small">
              <div style={{'background-color':'#FFCC31', height:"50px", color:"white"}}><small>Private Plan<br/> (2 Users)</small></div>
              <div style={{'background-color':'#EFBB20',color:"white"}}><span style={{"font-size":'3em'}}>FREE</span><br/><span style={{color:"#F5D679"}}>per user/month</span></div>
              <div style={{'background-color':'#F8F8F8', color:'#9C9DB7'}}><small>No credit card required</small></div>
              <div style={{'background-color':'#FFFFFF', color:'#9196BC'}}><small>No base fee</small></div>
              <div className="pricing_link_box">
                <div style={{width:"150px",margin:'auto', 'border-radius':'5px', 'background-color':'#EFBB20',border:'1px solid #EFBB20'}}>
                  <NavLink style={{color:'white'}} className="pricing_link" to ="/contact">
                  <FontAwesome id="heart" className='super-crazy-colors' name='heart' size='1x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'white'}}/>
                    <small> Try for Free</small>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="pricing_box_small">
              <div style={{'background-color':'#FFCC31', height:"50px",color:"white"}}><small>Business Plan<br/> (More than 3 Users)</small></div>
              <div style={{'background-color':'#EFBB20',color:"white"}}><span style={{"font-size":'3em'}}>5</span>$ <br/><span style={{color:"#F5D679"}}>per user/month</span></div>
              <div style={{'background-color':'#F8F8F8',color:'#9C9DB7'}}><small>No credit card required</small></div>
              <div style={{'background-color':'#FFFFFF',color:'#9196BC'}}><small>No base fee</small></div>
              <div className="pricing_link_box">
                <div style={{width:"150px",margin:'auto', 'border-radius':'5px', 'background-color':'#EFBB20', border:'1px solid #EFBB20'}}>
                  <NavLink style={{color:'white'}} className="pricing_link" to ="/contact">
                  <FontAwesome id="thumbs-o-up" className='super-crazy-colors' name='thumbs-o-up' size='1x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'white'}}/>
                    <small> Try for Free</small>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{position:'relative', color:'#919191','font-family': "Metrophobic, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif",'margin-left':"60px"}}>
            <h4 style={{'margin':'50px 0 20px 50px'}}>Frequently Asked Questions<hr/></h4>
          </div>
          <div className="pricing_questions">
            <div> {/*left*/}
              <div className="pricing_questions_list">
                <h4>How does the free trial work</h4>
                <p><small>Simply request a trial from us and we will contact you to discuss your business requirements and help you set up. The trial period is 30 days and includes full service support for any enquiries. If you wish to proceed with the service after the trial period, you will be billed monthly based on the amount of active users* you have for each month. If for any reason you do not wish to proceed with the service, there will be no additional action for you to do. <br/><br/>*Only the selected users from the company can register a new employee onto your TimesheetsGO database. Upon registration, the user is considered an active user until the account has been de-activated for more than 10 days.</small></p>
              </div>
              <div className="pricing_questions_list">
                <h4>Is there any hidden charge for the free trial?</h4>
                <p><small>NO! We do not collect any payment details from you during the trial. We only require your payment details when you’re ready to sign up with us after your free trial.</small></p>
              </div>
              <div className="pricing_questions_list">
                <h4>I wish to know more about the software.</h4>
                <p><small>Not a problem. Give us a call and we can discuss your individual needs and set up a demo if required.</small></p>
              </div>
            </div>
            <div> {/*right*/}
              <div className="pricing_questions_list">
                <h4>What if this is not quite to the timesheet that my company needs?</h4>
                <p><small>We are here for our customers. Let us know what your requirements are and we can custom design a program to suit you (Additional fees may apply).</small></p>
              </div>
              <div className="pricing_questions_list">
                <h4>Is this a lock in contract?</h4>
                <p><small>No. We are confident with our service so there is no fixed term for the contract. If you are unsatisfied for any reason, you are welcome to opt out at any time.</small></p>
              </div>
              <div className="pricing_questions_list">
                <h4>How will I be billed?</h4>
                <p><small>You will be billed monthly based on the amount of active users you have for that month. For example, if you have 20 employees using TimesheetsGO, you will pay 20 * $5 = $100 (AUD) for that month. Please see FAQ: How does the free trial work for more detail about active users</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default (Pricing);

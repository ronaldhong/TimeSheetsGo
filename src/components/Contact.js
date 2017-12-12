import React, { Component } from 'react';

class Contact extends Component{
  constructor(props){
    super(props)
      this.state = {
        name: '',
        email:"",
        phone:"",
        subject:"",
        message:"",
      };
  }

  render(){
    let p_color ={
      color: "#EFBB4B"
    }
    return(
      <div>
        <div className="Contact_box">
          <p>Please provide your details below in order for us to assist you. For trials, our representative will contact you to setup the necessary requirements. Information will be kept securely by our systems and will only be used to contact you for any support and service. If you do not receive a confirmation email from us within 2 minutes, please contact us on <i style={p_color}>contact@timesheetgo.com</i></p>
        </div>
        <div className="Contact_box">
          <h3>Contact us</h3>
          <form className="contact_box_form">
            <label>Name * </label>
            <br/>
            <input type="text" value={this.state.name} />
            <br/>
            <label>E-Mail * </label>
            <br/>
            <input type="text" value={this.state.email} />
            <br/>
            <label>Phone * </label>
            <br/>
            <input type="text" value={this.state.phone} />
            <br/>
            <label>Subject * </label>
            <br/>
            <input type="text" value={this.state.subject} />
            <br/>
            <label>Message * </label>
            <br/>
            <textarea type="text" value={this.state.message} />
            <br/>
            <input type="submit" value= "submit"/>
          </form>

        </div>
      </div>
    )
  }
}
export default (Contact);

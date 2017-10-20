import React, { Component } from 'react';

class Contact extends Component{
  constructor(props){
    super(props)

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
      </div>
    )
  }
}
export default (Contact);

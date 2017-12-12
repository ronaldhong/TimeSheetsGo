import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';
import validator from 'validator';

// const required = (value) => {
//   if (!value.toString().trim().length) {
//     // We can return string or jsx as the 'error' prop for the validated Component
//     return 'require';
//   }
// };
//
// const email = (value) => {
//   if (!validator.isEmail(value)) {
//     return `${value} is not a valid email.`
//   }
// };
//
// const lt = (value, props) => {
//   // get the maxLength from component's props
//   if (!value.toString().trim().length > props.maxLength) {
//     // Return jsx
//     return <span className="error">The value exceeded {props.maxLength} symbols.</span>
//   }
// };


class Contact extends Component{
  constructor(props){
    super(props)
      this.state = {
        Name: '',
        email:"",
        phone:"",
        subject:"",
        message:"",
        loading: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        name: value
      });
    }
  handleSubmit(event){
    event.preventDefault()
    this.setState({
      loading: true
    })
    setTimeout(function(){
      this.setState({loading:false});
      alert("Thank you so much for your interest in TimeSheetsGo! We've received your submission and hope to get back to you soon. Our response times average about 1 week, as we make an effort to provide personalized feedback on each manuscript we receive.")
    }.bind(this), 2000);
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
            <input type="text"   onChange={this.handleInputChange} ref="name"/>
            <br/>
            <label>E-Mail * </label>
            <br/>
            <input type="text" name="email"  onChange={this.handleInputChange} ref="email" />
            <br/>
            <label>Phone * </label>
            <br/>
            <input type="text"     onChange={this.handleInputChange} ref="phone"/>
            <br/>
            <label>Subject * </label>
            <br/>
            <input type="text"     onChange={this.handleInputChange} ref="subject" />
            <br/>
            <label>Message * </label>
            <br/>
            <textarea type="text"     onChange={this.handleInputChange} ref="message"/>
            <br/>
            <input type="submit" value= "submit" onClick={this.handleSubmit} />
            <div className="contact_loader">
              <BeatLoader
                color={'#123abc'}
                loading={this.state.loading}
              />
            </div>
          </form>

        </div>
      </div>
    )
  }
}
export default (Contact);

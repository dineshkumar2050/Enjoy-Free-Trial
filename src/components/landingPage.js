import React,{ Component } from 'react';
import Image from '../assets/images/banner-main-image.jpg';
import { BsEnvelope } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import {CheckFormValidity,validateEmail} from './helperFunction';
import  { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addEmail} from '../actions/action';

class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailId : null,
            redirect : false,
            errors : {
                emailError : ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        const {name,value} = e.target;
        let errors = {...this.state.errors};
        switch (name){
            case "emailId":
                if(value.length===0) errors.emailError = "Email cannot be empty";
                else if(!validateEmail(value)) errors.emailError = "Invalid email address";
                else errors.emailError = "";
                break;            
            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }
    handleSubmit(e){
        e.preventDefault();
        if(CheckFormValidity(this.state)){
            this.setState({redirect : true });
            const email = this.state.emailId;
            this.props.addEmail(email);        
        }
    }
    render(){
        const { errors } = this.state;
        const redirect = this.state.redirect;
        if (redirect === true) {
            return <Redirect to="/verifyOtp" />
        }
        return(
            <div className="landing-page pageClass">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 outside-left-content">
                            <div className="py-4 left-side-content d-flex justify-content-center align-items-center">
                               <img src={Image} alt="bannerImg" />
                            </div>
                        </div>
                        <div className="col-md-6 outside-right-content">
                            <div className="right-side-content d-flex justify-content-center align-items-center">
                                <form onSubmit={this.handleSubmit} className="form d-flex flex-column justify-content-between">
                                    <div className="form-content">
                                        <h2 className="mb-4">Fill the details to enjoy free trial</h2>
                                        
                                        <div className="module mb-4"> 
                                            <h3 className="mb-2">Module</h3>
                                            <div className="module-content d-flex align-items-center p-2" style={{background:"#ddd"}}>
                                                <span className="d-inline-block mr-3"><FiShare2 /></span>
                                                <h4>Desktop Monitoring</h4>
                                            </div>
                                        </div>
                                        <div className="email-content">
                                            <label className="d-block" htmlFor="email" >Email-id</label>
                                            <span><BsEnvelope /></span>
                                            <input noValidate type="email" className=" d-block" id="email" name="emailId" placeholder="Enter email id" onChange={this.handleChange} />
                                            <span className="d-block mb-2 error">{ errors.emailError.length > 0 ? errors.emailError : ""}</span>
                                            <small>Enter your email id to get a OTP</small>
                                        </div>
                                    </div>
                                    
                                    <div className="submit-button text-center">
                                        <input type="submit" value="GET OTP" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LandingPage.propTypes = {
    addEmail : PropTypes.func.isRequired
}

export default connect(null,{addEmail})(LandingPage);
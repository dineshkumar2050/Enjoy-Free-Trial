import React,{ Component } from 'react';
import Image from '../assets/images/banner-main-image.jpg';
import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {CheckFormValidity} from './helperFunction';
import  { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class VerifyOtp extends Component{
    constructor(props){
        super(props);
        this.state = {
            digit1 : null,
            digit2 : null,
            digit3 : null,
            digit4 : null,
            digit5 : null,
            digit6 : null,
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
            case "digit1":
                if(value.length===0) errors.emailError = "OTP cannot be empty";
                if(value>9)   errors.emailError = "Invalid OTP";
                else errors.emailError = "";
                break;
            case "digit2":
                if(value.length===0) errors.emailError = "OTP cannot be empty";
                if(value>9)   errors.emailError = "Invalid OTP";
                else errors.emailError = "";
                break;
            case "digit3":
                if(value.length===0) errors.emailError = "OTP cannot be empty";
                if(value>9)   errors.emailError = "Invalid OTP";
                else errors.emailError = "";
                break;
            case "digit4":
                if(value.length===0) errors.emailError = "OTP cannot be empty";
                if(value>9)   errors.emailError = "Invalid OTP";
                else errors.emailError = "";
                break;
            case "digit5":
                if(value.length===0) errors.emailError = "OTP cannot be empty";
                if(value>9)   errors.emailError = "Invalid OTP";
                else errors.emailError = "";
                break;
            case "digit6":
                if(value.length===0) errors.emailError = "OTP cannot be empty";
                if(value>9)   errors.emailError = "Invalid OTP";
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
        }
    }
    render(){
        const { errors } = this.state;
        const redirect = this.state.redirect;
        if (redirect === true) {
            return <Redirect to="/startTrial" />
        }
        return(
            <div className="verifyOtp-page pageClass">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 outside-left-content">
                            <div className="py-4 left-side-content d-flex justify-content-center align-items-center">
                               <img src={Image} alt="bannerImg" />
                            </div>
                        </div>
                        <div className="col-md-6 outside-right-content">
                            <div className="right-side-content d-flex justify-content-center align-items-center">
                                <form onSubmit={this.handleSubmit}  className="form d-flex flex-column justify-content-between">
                                    <div className="form-content">
                                        <h2 className="mb-4">Fill the details to enjoy free trial</h2>                                        
                                        
                                        <div className="email-content main">
                                            <h4 className="text-center d-flex justify-content-center align-items-center  mb-4">
                                                Enter OTP Sent To
                                                <span className="d-inline-block mx-2">{this.props.email}</span>
                                                <span className="d-inline-block"><BsPencilSquare /></span>
                                            </h4>
                                            <div className="inputs">
                                                <div className="d-flex justify-content-center input-fields">
                                                    <input noValidate className="mr-2" onChange={this.handleChange} name="digit1" placeholder="0" type="number"  />
                                                    <input noValidate className="mr-2" onChange={this.handleChange} name="digit2" placeholder="0" type="number"  />
                                                    <input noValidate className="mr-2" onChange={this.handleChange} name="digit3" placeholder="0" type="number"  />
                                                    <input noValidate className="mr-2" onChange={this.handleChange} name="digit4" placeholder="0" type="number"  />
                                                    <input noValidate className="mr-2" onChange={this.handleChange} name="digit5" placeholder="0" type="number"  />
                                                    <input noValidate onChange={this.handleChange} name="digit6" placeholder="0" type="number"  />                                                    
                                                </div>
                                                <span className="text-right error d-block mb-2">{ errors.emailError.length > 0 ? errors.emailError : ""}</span>
                                                <span className="text-right error d-block mb-2">{ CheckFormValidity(this.state)===false ? "OTP cannot be empty" : "" }</span>
                                                <small className="text-right d-block"> Didn't get the OTP?<Link to="/">Resend OTP</Link></small>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="submit-button text-center">
                                        <input type="submit" value="VERIFY OTP" />
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

const mapStateToProps = (state)=>({
    email : state.allReducers.email
})

export default connect(mapStateToProps)(VerifyOtp);
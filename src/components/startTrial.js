import React,{ Component } from 'react';
import Image from '../assets/images/banner-main-image.jpg';
import { BsEnvelope } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import {CheckFormValidity,validatePassword} from './helperFunction';
import  { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

class StartTrial extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : null,
            number : null,
            companyName : null,
            industry : null,
            empStrength : null,
            password : null,
            confirmpwd : null,
            redirect : false,
            email : this.props.email,
            errors:{
                nameError : "",
                numberError : "",
                companyNameError : "",
                industryError : "",
                empStrengthError : "",
                passwordError : "",
                submitError : "" 
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        console.log(this.props.email)
        e.preventDefault();
        const {name,value} = e.target;
        let errors = {...this.state.errors};
        switch (name){
            case "name":
                if(value.length===0) errors.nameError = "Name cannot be empty";                
                else errors.nameError = "";
                break;
            case "number":
                if(value.length===0) errors.numberError = "Phone Number cannot be empty";
                if(value.length>10) errors.numberError = "Invalid Phone Number";                 
                else errors.numberError = "";
                break;
            case "companyName":
                if(value.length===0) errors.companyNameError = "companyName cannot be empty";                
                else errors.companyNameError = "";
                break;
            case "industry":
                if(value.length===0) errors.industryError = "Industry cannot be empty";                
                else errors.industryError = "";
                break;
            case "empStrength":
                if(value.length===0) errors.empStrengthError = "Employe Strength cannot be empty";                
                else errors.empStrengthError = "";
                break;
            case "password":
                if(!validatePassword(value)) errors.passwordError = "Invalid password";                
                else errors.passwordError = "";                
                break;
            case "confirmpwd":
                if(value!==this.state.password) errors.submitError = "passwords do not match";                
                else errors.submitError = "";
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
            return <Redirect to="/successPage" />
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

                                        <div className="email-content main-content">
                                            <label className="d-block" htmlFor="name" >Contact Person</label>
                                            <span><BsEnvelope /></span>
                                            <input type="text" className="d-block" id="name" name="name" placeholder="Enter contact Person's Name" onChange={this.handleChange} />
                                            <span className="text-left error d-block mb-2">{ errors.nameError.length > 0 ? errors.nameError : ""}</span>                                            
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-lg-0 mb-3">
                                                <div className="email-content main-content">
                                                    <label className="d-block" htmlFor="name" >Mobile Number</label>
                                                    <span><BsEnvelope /></span>
                                                    <input type="number" className=" d-block" id="phonenumber" name="number" placeholder="Enter contact Person's Name" onChange={this.handleChange} />
                                                    <span className="text-left error d-block mb-2">{ errors.numberError.length > 0 ? errors.numberError : ""}</span>                                            
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="email-content main-content">
                                                    <label className="d-block" htmlFor="email" >Email-id</label>
                                                    <span><BsEnvelope /></span>
                                                    <input disabled type="email" className="mb-2 d-block" id="email" name="emailId" placeholder={this.props.email} value={this.props.email}  onChange={this.handleChange} />                                                                                                      
                                                </div>
                                            </div>
                                        </div>

                                        <div className="email-content main-content">
                                            <label className="d-block" htmlFor="name" >Company Name</label>
                                            <span><BsEnvelope /></span>
                                            <input type="text" className="d-block" id="companyName" name="companyName" placeholder="Enter contact Person's Name" onChange={this.handleChange} />
                                            <span className="text-left error d-block mb-2">{ errors.companyNameError.length > 0 ? errors.companyNameError : ""}</span>                                            
                                        </div>
                                                        
                                        <div className="email-content main-content">
                                            <label className="d-block" htmlFor="name" >Company URL <small> (Optional)</small></label>
                                            <span><BsEnvelope /></span>
                                            <input type="text" className="mb-3 d-block" id="companyURL" name="companyURL" placeholder="Enter contact Person's Name" onChange={this.handleChange} />
                                                                                        
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-lg-0 mb-3">
                                                <div className="email-content main-content">
                                                    <label className="d-block" htmlFor="industry" >Industry</label>
                                                    <span><BsEnvelope /></span>
                                                    <select name="industry" id="industry" onChange={this.handleChange}>
                                                        <option value="volvo">ABC</option>
                                                        <option value="saab">DEF</option>
                                                        <option value="mercedes">PQR</option>
                                                        <option value="audi">XYZ</option>
                                                    </select>
                                                    <span className="text-left error d-block mb-2">{ errors.industryError.length > 0 ? errors.industryError : ""}</span>                                            
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="email-content main-content">
                                                    <label className="d-block" htmlFor="empStrength" >Employee Strength</label>
                                                    <span><BsEnvelope /></span>
                                                    <select name="empStrength" id="empStrength" onChange={this.handleChange}>
                                                        <option value="volvo">ABC</option>
                                                        <option value="saab">DEF</option>
                                                        <option value="mercedes">PQR</option>
                                                        <option value="audi">XYZ</option>
                                                    </select>
                                                    <span className="text-left error d-block mb-2">{ errors.empStrengthError.length > 0 ? errors.empStrengthError : ""}</span>                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-lg-0 mb-3">
                                                <div className="email-content main-content">
                                                    <label className="d-block" htmlFor="name" >Create Password</label>
                                                    <span><BsEnvelope /></span>
                                                    <input type="password" className=" d-block" id="password" name="password" placeholder="create password" onChange={this.handleChange} />
                                                    <span className="text-left error d-block mb-2">{ errors.passwordError.length > 0 ? errors.passwordError : ""}</span>                                            
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="email-content main-content">
                                                    <label className="d-block" htmlFor="email" >Confirm Password</label>
                                                    <span><BsEnvelope /></span>
                                                    <input type="password" className=" d-block" id="confirmpwd" name="confirmpwd" placeholder="Confirm Password" onChange={this.handleChange} />
                                                    <span className="text-left error d-block mb-2">{ errors.submitError.length > 0 ? errors.submitError : ""}</span>                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="submit-button text-center">
                                        <input type="submit" value="START MY FREE TRIAL" />
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

export default connect(mapStateToProps)(StartTrial);
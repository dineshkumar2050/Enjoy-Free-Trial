import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

export default class SuccessPage extends Component{
    render(){
        return(
            <div className="success-page">
                <div className="container">
                    <div className="d-flex email-content flex-column justify-content-center align-items-center">                        
                        <div className="innerDiv">
                            <h3 className="mb-3 text-center">Thank You For Signing up</h3>
                            <p className="mb-5 text-center" >
                                <span>Your Account is Successfully created.</span>
                                Enjoy your 7 days free trial by Login to your account using your credential
                            </p>
                            <div className="submit-button text-center">                                
                                <Link to={"/"} type="submit"> Go To Login </Link>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}
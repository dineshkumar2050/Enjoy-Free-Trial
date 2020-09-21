export const CheckFormValidity  = ({errors,...rest})=>{
    let valid = true;
    Object.values(errors).forEach((value)=>{
        if(value.length>0 && (valid = false)); 
    });
    Object.values(rest).forEach(value=>{
        if(value==="" || value===null ){
            valid = false
        } 
    });
    return valid;    
}

export const validateEmail = (email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validatePassword=(password)=> {    
    const minNumberofChars = 8;
    const maxNumberofChars = 16;
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(password.length < minNumberofChars || password.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.test(password)) {
        return false;
    }
    else return true;
}
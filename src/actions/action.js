import { REGISTER } from './actionTypes';

export const addEmail = (email)=>  dispatch=>{
    try{
        dispatch({
            type : REGISTER,
            payload : email
        })
    }   
    catch(err){
        console.log(err);
    }
}
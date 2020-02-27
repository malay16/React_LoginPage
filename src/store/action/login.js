import * as actionTypes from './actionTypes';





export const auth=(email,password)=>{
    return{
        type:actionTypes.AUTH,
        email:email,
        password:password
    }
}




import * as actionTypes from './actionTypes';





export const auth=(email,password)=>{
    return{
        type:actionTypes.AUTH,
        email:email,
        password:password
    }
}

export const authPassword=(email,mobile,password)=>{
    return{
        type:actionTypes.AUTHPASSWORD,
        email:email,
        mobile:mobile,
        password:password
    }
}


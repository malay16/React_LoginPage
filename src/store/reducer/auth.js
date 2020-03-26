import * as actionTypes from '../action/actionTypes';

//import {updateObject} from '../utility'


const initailState={
   
    error:null,
    login:{  "username":"hruday@gmail.com","password" :'hruday123','mobile':"9110000000" }

}


const auth=(state,action)=>{
    let name=state.login.username
    let password=state.login.password
    console.log(name,password)
    console.log(action.email,action.password)

    if(action.email===name && action.password===password){
        console.log("true has condition")
        return {
            ...state,
            error:false
        }
    }
    else{
        console.log("false has condition")
        return{
             ...state,
             error:true
        }
    }
}

const authPassword=(state,action)=>{
    let name=state.login.username
    let password=state.login.password
    let mobile=state.login.mobile
    console.log(name,password)
    console.log(action.email,action.mobile)

    if(action.email===name && action.mobile===mobile){
        console.log("true has condition")
        return {
            ...state,
            error:false,
            login:{ "username":"hruday@gmail.com","password" :action.password,'mobile':"9110000000" },
            }    }
    else{
        console.log("false has condition")
        return{
             ...state,
             error:true
        }
    }
}


const reducer =(state=initailState,action)=>{

    switch(action.type){
        case actionTypes.AUTH:return auth(state,action)
        case actionTypes.AUTHPASSWORD:return authPassword(state,action)
       
        
            
            default:
                return state;

    }
};



export default reducer;
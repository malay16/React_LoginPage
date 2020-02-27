import * as actionTypes from '../action/actionTypes';
//import {updateObject} from '../utility'


const initailState={
   
    error:false,
    login:{  "username":"hruday@gmail.com","password" :'hruday123' }

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

const reducer =(state=initailState,action)=>{

    switch(action.type){
        case actionTypes.AUTH:return auth(state,action)
       
        
            
            default:
                return state;

    }
};



export default reducer;
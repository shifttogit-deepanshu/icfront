import {SET_UID} from "../actions/user"

const initiaState = {uid:0,containers:[]}


const userReducer = (state=initiaState,action)=>{
    switch(action.type){
    case SET_UID: 
    return {...state,uid:action.uid}
    default:
            return state
    }
}

export default userReducer
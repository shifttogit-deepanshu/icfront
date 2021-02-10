import {SET_LOGS} from "../actions/container"


const initiaState = {}

export const containerReducer = (state=initiaState,action)=>{
    switch(action.type){
        case SET_LOGS:
            return action.logs
    default:
            return state
    }
}

export default containerReducer
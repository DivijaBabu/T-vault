// import * as ActionTypes from "../Action/actiontypes";
const initalState ={safeList:[]}
export default function Reducers (state = initalState, action) { //returning a state
    switch (action.type){
    case "ADD_SAFE":{
        return {
                safeList:[...state.safeList,action.payload]
               }
    }
    default:
            return state;
    }
  };
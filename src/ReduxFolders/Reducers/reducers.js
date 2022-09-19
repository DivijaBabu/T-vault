import * as ActionTypes from "../Action/actiontypes";
const initalstate =[{SafeList:[]}]
export default (state = [...initalstate], action) => { //returning a state
    switch (action.type){
    case ActionTypes.CREATE_NEW_SAFE:{}
    default:
            return state;
    }
  };
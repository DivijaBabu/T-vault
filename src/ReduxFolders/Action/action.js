import * as ActionTypes from  "../Action/actiontypes";
export const ActionCreateSafe = (data) =>{
return{
    type: ActionTypes.CREATE_NEW_SAFE,
    data: data
}}
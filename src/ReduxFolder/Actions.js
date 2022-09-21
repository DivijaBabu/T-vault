import { createSlice } from "@reduxjs/toolkit";
export const UserSlice =createSlice({
    name:"users",
    initialState:{
        value:[],
        currentId:"",
      },
    reducers:{
        setCurrentId: (state, action) => {
            state.curId = action.payload;
          },
        addSafe:(state,action)=>{
            //adding a safe
            console.log("addsafe");
            state.value.push(action.payload);
        },
        updateSafe: (state, action) => {
            state.value.forEach((user,index) =>{
           
              if (user.id === action.payload.id) {
                state.value.splice(index, 1, action.payload);
              }
            });
          },
          deleteSafe:(state,action)=>{
            state.value=state.value.filter((user)=>user.id !== action.payload.id);
           },
    }
})
export const {addSafe,updateSafe,deleteSafe}=UserSlice.actions;
export default UserSlice.reducer;
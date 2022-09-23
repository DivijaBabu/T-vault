import { createSlice } from "@reduxjs/toolkit";
export const UserSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
    curId: "",
  },
  reducers: {
    setCurId: (state, action) => {
      state.curId = action.payload.id;
    },
    addSafe: (state, action) => {
      //adding a safe
      // console.log("addsafe");
      state.value.push(action.payload);
      state.curId = action.payload.id;
    },
    updateSafe: (state, action) => {
      state.value.forEach((user, index) => {
        if (user.id === action.payload.id) {
          state.value.splice(index, 1, action.payload);
        }
      });
    },
    deleteSafe: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    addSecret: (state, action) => {
      state.value.forEach((user) => {
        if (user.id === action.payload.curId) {
          // const obj={secret:action.payload.secret,id:action.payload.id}
          user.secret.push(action.payload.secret);
        }
      });
    },

    deleteSecret: (state, action) => {
      state.value.forEach((secrets) => {
        secrets.secret.forEach((value, index) => {
          if (value === action.payload.id) {
            secrets.secret.splice(index, 1);
          }
        });
      });
    },
  },
});
export const {
  addSafe,
  updateSafe,
  deleteSafe,
  addSecret,
  deleteSecret,
  setCurId,
} = UserSlice.actions;
export default UserSlice.reducer;

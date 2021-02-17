import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    localUserRole: "",
    loggedOutRecently: false,
    currentUserDBDetails: null,
    userCollection: null,
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
        loggedOutRecently: false,
      };
    },

    loggedOutRecently: (state) => {
      return {
        ...state,
        loggedOutRecently: true,
      };
    },

    setUserCollection: (state, action) => {
      return {
        ...state,
        userCollection: action.payload,
      };
    },

    setLocalUserRole: (state, action) => {
      return {
        ...state,
        localUserRole: action.payload,
      };
    },

    setCurrentUserDBDetails: (state, action) => {
      return {
        ...state,
        currentUserDBDetails: action.payload,
      };
    },
  },
});

export const {
  setUser,
  loggedOutRecently,
  setCurrentUserDBDetails,
  setUserCollection,
  setLocalUserRole,
} = userSlice.actions;

export const selectUser = (state) => state.userStore.currentUser;
export const selectLoggedOutState = (state) =>
  state.userStore.loggedOutRecently;
export const selectUserCollec = (state) => state.userStore.userCollection;
export const selectCurrentUserDBDetails = (state) =>
  state.userStore.currentUserDBDetails;
export const selectLocalUserRole = (state) => state.userStore.localUserRole;

export default userSlice.reducer;

import { configureStore, createSlice } from '@reduxjs/toolkit';

const count = createSlice({
  name:'counter',
  initialState:{count:1},
  reducers:{
    increament:(state)=>{state.count += 1 }
  }
})

export const {increament} =count.actions

// Create store
const store = configureStore({
  reducer:{
    count:count.reducer
  }
  
});

export default store;

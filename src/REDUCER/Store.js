import { configureStore, createSlice } from '@reduxjs/toolkit';

const count = createSlice({
  name:'counter',
  initialState:{count:1},
  reducers:{
    increament:(state)=>{state.count += 1 }
  }
})


const color = createSlice({
  name:'colors',
  initialState:{backgroundColor: 'red'},
  reducers:{
    setYellow: (state)=>{state.backgroundColor = 'yellow'}
  }
})

export const {setYellow} = color.actions







export const {increament} =count.actions

// Create store
const store = configureStore({
  reducer:{
    count:count.reducer,
    color:color.reducer,
  }
  
});

export default store;

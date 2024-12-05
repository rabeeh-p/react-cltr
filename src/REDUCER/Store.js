import { configureStore, createSlice } from '@reduxjs/toolkit';


const count = createSlice({
  name:'counter',
  initialState:{count:1},
  reducers:{
    increament:(state)=> {state.count += 1}
  }
})

export const {increament} = count.actions


const color = createSlice({
  name:'color',
  initialState: {backgroundColor: 'red'},
  reducers:{
    setYello: (state)=>{state.backgroundColor = 'yellow'},
    setGreen: (state)=>{state.backgroundColor = 'green'}
  }
})

export const {setGreen,setYello} = color.actions


// Create store
const store = configureStore({
  reducer: {
    count:count.reducer,
    color: color.reducer

    
  },
});

export default store;

import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

const colorSlice = createSlice({
    name: 'color',
    initialState: { backgroundColor: 'red' }, // Initial color
    reducers: {
      toggleColor: (state) => {
        state.backgroundColor = state.backgroundColor === 'red' ? 'green' : 'red';
      },
    },
  });

  export const { toggleColor } = colorSlice.actions;


// Export actions
export const { increment, decrement } = counterSlice.actions;


const newColor = createSlice({
  name: 'newColor',
  initialState: {color:'red'},
  reducers:{
    setBlack : (state)=>{state.color = 'black'},
    setYellow : (state)=>{state.color = 'yellow'}
  }
})

export const {setBlack,setYellow} = newColor.actions



const rabeeh = createSlice({
  name: 'hek',
  initialState: {value:1},
  reducers:{
    plus: (state)=>{state.value += 1}
  }
})
console.log(rabeeh.actions,'actionsssssss');


export const {plus} = rabeeh.actions






// Create store
const store = configureStore({
  reducer: {

    counter: counterSlice.reducer, 
    color: colorSlice.reducer,
    txtColor: newColor.reducer,
    newValue: rabeeh.reducer
  },
});

export default store;

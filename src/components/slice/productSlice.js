import { createSlice } from '@reduxjs/toolkit'
import Products from '../Products'

const initialState = {
  cartItem:[],
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      let findindex =state.cartItem.findIndex((item)=>item.id == action.payload.id)

      if(findindex !=-1){
        state.cartItem[findindex].qun++
      }else{
        // product nai
        state.cartItem=[...state.cartItem, action.payload]
      }     
    },
     increaseQun: (state, action) => {
      let findindex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      )
      if (findindex !== -1) {
        state.cartItem[findindex].qun++
      }
    },

    decreaseQun: (state, action) => {
      let findindex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      )
      if (findindex !== -1) {
        if (state.cartItem[findindex].qun > 1) {
          state.cartItem[findindex].qun--
        } else {
          // যদি quantity = 1 থাকে → remove করে দাও
          state.cartItem = state.cartItem.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
    },
    removeCart:(state,action)=>{
     let filtercart=state.cartItem.filter((item)=>item.id !=action.payload.id) 
     state.cartItem=filtercart
    
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,increaseQun, decreaseQun, removeCart } = productSlice.actions

export default productSlice.reducer
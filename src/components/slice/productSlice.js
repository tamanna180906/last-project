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
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions

export default productSlice.reducer
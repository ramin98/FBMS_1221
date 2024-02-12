import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
      const res = await fetch('http://localhost:5000/goods')
      const data = await res.json()
      return data
    }
  )

const goodsSlice = createSlice({
    name:'goods',
    initialState: {
        goods: [],
        bagGoods: [],
        addingInfo: '',
        deletingInfo: '',
        isLoading:false,
        error:null
    },
    reducers:{
        addingData: (state, action) => {
            return {...state, addingInfo: action.payload}
        },
        deletingData: (state, action) => {
            return {...state, deletingInfo: action.payload}
        },
        addBagData: (state, action) => {
            return {...state, bagGoods: action.payload}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
          state.goods = action.payload
          state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
          state.isLoading = false
          state.error = true
        })
      },

})
export const {addingData, deletingData, addBagData} =  goodsSlice.actions

export default goodsSlice.reducer

// function reducer(state = initialState, action){
//     if(action.type === 'GET DATA'){
//         return {...state, usersArray: action.payload}
//     }
//    else if(action.type === 'ADD'){
//         let newArr = [...state.usersArray]
//         newArr = [...newArr, action.payload]
//         return {...state, usersArray: newArr}
//     }
//     else if(action.type === 'ADDING INFO'){
//         return {...state, addingInfo: action.payload}
//     }
//     return state
// }

// export default reducer

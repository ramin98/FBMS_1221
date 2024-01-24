import { configureStore } from '@reduxjs/toolkit';
import goodsSlice from "./reducer"

let applicationStore = configureStore({
    reducer:{
        goods: goodsSlice,
    }
})

export default applicationStore
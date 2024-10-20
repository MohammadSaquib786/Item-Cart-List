import {configureStore} from '@reduxjs/toolkit';
import itemSlice from './slices/AddItemSlice'

export default configureStore({
    reducer:{
        itemSlice,
    }
})
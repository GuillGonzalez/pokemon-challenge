import { configureStore } from '@reduxjs/toolkit'
import selectorReducer from './overlaySlice'

export default configureStore({
  reducer: {
    selector: selectorReducer,
  },
})
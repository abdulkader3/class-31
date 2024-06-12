import { configureStore } from '@reduxjs/toolkit'
import shanto from '../src/Slices/counterSlices'

export default configureStore({
  reducer: {
    prity: shanto,
  },
})
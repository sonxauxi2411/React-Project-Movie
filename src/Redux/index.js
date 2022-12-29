import { configureStore, createSlice } from '@reduxjs/toolkit'
import { loadingGlobalSlice } from './LoadingGlobal'

const store = configureStore({
  reducer: {
    loading: loadingGlobalSlice.reducer,
  },
})
export default store

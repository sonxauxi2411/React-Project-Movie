import { createSlice } from '@reduxjs/toolkit'

export const loadingGlobalSlice = createSlice({
  name: 'loading',
  initialState: {
    globalLoading: false,
  },
  reducers: {
    setGlobalLoading(state, action) {
      state.globalLoading = action.payload
    },
  },
})

export const loadingGlobalAction = loadingGlobalSlice.actions

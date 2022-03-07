import { createSlice } from '@reduxjs/toolkit'

export const overlaySlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    update_selected: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement, incrementByAmount } = overlaySlice.actions

export default overlaySlice.reducer
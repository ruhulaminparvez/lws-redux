import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showContent: false,
};

const showContentSlice = createSlice({
    name: 'showContent',
    initialState,
    reducers: {
        showContent: (state, action) => {
            state.showContent = !state.showContent;
        }
    }
});

export const { showContent } = showContentSlice.actions;
export default showContentSlice.reducer;
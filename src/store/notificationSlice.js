import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: "notifications",

    initialState: {
        notifications: []
    },

    reducers: {
        addNotification(state, action) {
            state.notifications.push(action.payload)
        },

        deleteNotification(state, action) {
            state.notifications = state.notifications.filter(item => item.id !== action.payload);
        },
    }

});

export const { addNotification, deleteNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
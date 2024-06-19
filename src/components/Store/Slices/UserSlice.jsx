import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            console.log(action.payload)
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUser(state) {
            return [];
        },
    }
})

console.log(userSlice)
export default userSlice.reducer
export const { addUser, removeUser, deleteUser } = userSlice.actions
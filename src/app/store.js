import { configureStore } from "@reduxjs/toolkit"
import UsersReducer from "../features/userSlice"


export const store = configureStore({
    reducer: {
        usersInfo: UsersReducer
    },
})

export default store
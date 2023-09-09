import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },


        editUser: (state, action) => {
            const { id, name, email, address, phoneNumber, aadharNumber, checkInDate, stayDays } = action.payload
            const existingUser = state.users.find(user => user.id === id)

            if (editUser) {
                existingUser.name = name
                existingUser.email = email
                existingUser.address = address
                existingUser.phoneNumber = phoneNumber
                existingUser.aadharNumber = aadharNumber
                existingUser.checkInDate = checkInDate
                existingUser.stayDays = stayDays

            }
        },
        deleteUser: (state, action) =>{
            const newSetOfUsers = state.users.filter((user) => user.id !== action.payload)
            state.users = newSetOfUsers
        }
    }

})

export const { addUser, editUser, deleteUser } = userSlice.actions

export default userSlice.reducer

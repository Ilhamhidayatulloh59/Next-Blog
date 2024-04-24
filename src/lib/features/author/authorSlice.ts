import { createSlice } from "@reduxjs/toolkit"

export interface AuthorSlice {
    value: {
        id: number | null,
        name: string,
        email: string,
        image: string
    } | null;
}

const initialState: AuthorSlice = {
    value: null
}
export const authorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload 
        }
    }
})

export const { setUser } = authorSlice.actions
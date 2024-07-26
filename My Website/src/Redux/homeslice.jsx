import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products:[],
   
   
    
   
}

export const fetchUserById = createAsyncThunk(
    "home/fetchUserById",
    async () => {
        const response = await fetch(`https://fakestoreapi.com/products/`)
        const data = await response.json()
        return data
    }
)
export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        
        
       
         
     
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.products=action.payload
        })
    }
})
export const {} = homeSlice.actions
export default homeSlice.reducer
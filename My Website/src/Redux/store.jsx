
import { configureStore } from "@reduxjs/toolkit";
import { homeSlice} from "./homeslice";
import { cardSlice } from "./cardslice";

export const store =configureStore({
    reducer: {
        home:homeSlice.reducer,
        card:cardSlice.reducer
        
    },
})
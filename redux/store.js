import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slice";

const store = configureStore({
    reducer:{ 
        items: Slice,
    },
})
export default store;
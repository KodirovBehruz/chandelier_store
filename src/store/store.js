import { configureStore } from "@reduxjs/toolkit";
import { reducer as basketReducer } from "./basket/basket.slice.js";

const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});

export default store;

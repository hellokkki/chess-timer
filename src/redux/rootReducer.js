import { combineReducers } from "redux"

import { selectedTimeReducer } from "./selectedTimeReducer"

export const rootReducer = combineReducers({
        selecter: selectedTimeReducer, 
});
import { combineReducers } from "redux"
import { timerReducer } from "./timeReducer"
import { selectedTimeReducer } from "./selectedTimeReducer"

export const rootReducer = combineReducers({
        timer: timerReducer,
        selecter: selectedTimeReducer, 
});
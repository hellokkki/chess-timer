import { combineReducers } from "redux"
import { timerReducer } from "./timerReducer";
import { selectedTimeReducer } from "./selectedTimeReducer"

export const rootReducer = combineReducers({
        selecter: selectedTimeReducer, 
        timer: timerReducer
});
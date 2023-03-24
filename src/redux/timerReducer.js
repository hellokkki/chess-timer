import { BLACK_TO_MOVE, WHITE_TO_MOVE, STOP_MOVING } from "./types";

const initialState = {
    isWhiteRunning: false,
    isBlackRunning: false,
}

export const timerReducer = ( state = initialState, action ) => {
   switch(action.type) {
    case BLACK_TO_MOVE:
        return {
         ...state,
         isBlackRunning: true,
         isWhiteRunning: false
        };
    case WHITE_TO_MOVE:
        return {
         ...state,
         isBlackRunning: false,
         isWhiteRunning: true   
        };
    case STOP_MOVING:
        return initialState;
    default: 
        return initialState;
   };
};
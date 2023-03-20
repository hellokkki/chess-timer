import { SET_TIME_FIVETEEN_MINUTES, SET_TIME_FIVE_MINUTES, SET_TIME_TEN_MINUTES } from "./types";
import { BLACK_TO_MOVE, WHITE_TO_MOVE } from "./types";

const initialState ={
   whiteTime: "00:00",
   blackTime: "00:00"
};


export const selectedTimeReducer = ( state = initialState, action ) => {
   switch (action.type) {
     case SET_TIME_FIVE_MINUTES:
        return { 
         ...state,
         whiteTime: "5:00",
         blackTime: "5:00",
 
       };
      case SET_TIME_TEN_MINUTES:
         return { 
            ...state,
            whiteTime: "10:00",
            blackTime: "10:00",
     
          };
      case SET_TIME_FIVETEEN_MINUTES:
         return { 
            ...state,
            whiteTime: "15:00",
            blackTime: "15:00",
   
         }
    default: return state
   }
};


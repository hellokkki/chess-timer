import { SET_TIME_FIVETEEN_MINUTES, SET_TIME_FIVE_MINUTES, SET_TIME_TEN_MINUTES, SET_TIME_THIRTY_MINUTES, SET_TIME_HOUR, SET_TIME_HOUR_THIRTY } from "./types";
import { STOP_MOVING } from "./types";

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
         };
      case SET_TIME_THIRTY_MINUTES:
         return { 
             ...state,
            whiteTime: "30:00",
            blackTime: "30:00",
         };
      case SET_TIME_HOUR:
         return { 
            ...state,
            whiteTime: "1:00:00",
            blackTime: "1:00:00",
         };
      case SET_TIME_HOUR_THIRTY:
         return { 
            ...state,
            whiteTime: "1:30:00",
            blackTime: "1:30:00",
         };    
      case STOP_MOVING:
         return initialState;
    default: 
    return state
   }
};


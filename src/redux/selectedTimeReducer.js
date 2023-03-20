import { SET_TIME_FIVETEEN_MINUTES, SET_TIME_FIVE_MINUTES, SET_TIME_TEN_MINUTES } from "./types";

const initialState ={
   value: "00:00"
};

export const selectedTimeReducer = ( state = initialState, action ) => {
   switch (action.type) {
     case SET_TIME_FIVE_MINUTES:
        return { 
         ...state,
         value: "5:00",
       };
      case SET_TIME_TEN_MINUTES:
         return { 
            ...state,
            value: "10:00",
          };
      case SET_TIME_FIVETEEN_MINUTES:
         return { 
            ...state,
            value: "15:00",
      
         }
    default: return state
   }
};
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const mapStateToProps = state => {
 return {
   ...state,
   chessTimeValue: state
 }
};

const Timer = (chessTimeValue) => {
  const dispatch = useDispatch();
  const time = useSelector(chessTimeValue => {
    if (chessTimeValue !== undefined) {
      console.log(chessTimeValue)
      return chessTimeValue
    } 
  });

 const [whiteTime, setWhiteTime] = useState();
 const [blackTime, setBlackTime] = useState();
  


  let startTimer = null;


  const whiteToMove = () => {
    console.log('work')
    dispatch({type: 'MOVE/WHITE_TO_MOVE'})
  };

  const blackToMove = () => {
    console.log('work')
  };

 return (
   <div className='timer'>
    <div style={{padding: 20}}>
      {time.selecter.whiteTime}
      <button onClick={whiteToMove}>white to move!</button>
    </div>
   
 
    <div style={{padding: 20}}>
      {time.selecter.blackTime}
      <button onClick={blackToMove}>black to move!</button>
    </div>
   </div>
 )
}

export default connect(mapStateToProps, null) (Timer);

const twoDigits = (num) => String(num).padStart(2, '0');






  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (seconds > 0) {
  //      setSeconds(seconds - 1);
  //     }
  //    if (seconds === 0) {
  //       if (minutes === 0) {
  //           clearInterval(interval);
  //       } else {
  //           setMinutes( minutes - 1 );
  //           setSeconds(59);
  //       }
  //    }
  //    }, 1000);
  //    return () => {
  //       clearInterval(interval);
  //    }
  // })




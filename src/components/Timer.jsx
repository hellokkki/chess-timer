import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const mapStateToProps = state => {
  console.log(state)
 return {
   state
 }
};



const Clock = ({ time, onStop, isRunning }) => {

  const parseTimeToSeconds = str => str ? str.split(':').reduce((acc, time) =>(60 * acc) + +time) : "";
  const formatSecondsToTime = seconds => {
     let hours = Math.floor(seconds / 3600);
     let minutes = Math.floor((seconds - (hours * 3600)) / 60);  
     let secs = seconds - (hours * 3600) - (minutes * 60);
     let H, M, S;
     if (hours < 10) H = (`0${hours}`);
    if (minutes < 10) M = (`0${minutes}`);
    if (secs < 10) S = (`0${secs}`);
    return (`${H || hours} : ${M || minutes} : ${S || secs}`);
  };
  const [seconds, setSeconds] = useState(parseTimeToSeconds(time));
  
  useEffect(() => {
      if (isRunning === false) return;
      const timer = 
      setInterval(() => {
        if (seconds === 0) {
          onStop();
          clearInterval(timer);
        } else {
          setSeconds(seconds => seconds - 1);
        }
      }, 1000);
   
       return () => clearInterval(timer);
  }, [seconds, onStop]);

  return (
    <div>{formatSecondsToTime(seconds)}</div>
  )

};


const Timer = ({state}) => {
  const dispatch = useDispatch();
  const whiteTime = useSelector(state => state.selecter.whiteTime );
  const blackTime = useSelector(state => state.selecter.blackTime);
   const [isRunning, setIsRunning] = useState(false);
  console.log(whiteTime ? whiteTime : 'non');




   const onStop = () => {
    setIsRunning(false);
    
   }

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
      <Clock
      time={whiteTime ? whiteTime : "00:00"}
      onStop={onStop}
      isRunning={isRunning}
      />
      <button onClick={whiteToMove}>white to move!</button>
    </div>
   
 
    <div style={{padding: 20}}>
      <Clock 
      time={blackTime ? blackTime : "00:00"}
      onStop={onStop}
      isRunning={isRunning}
      />
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




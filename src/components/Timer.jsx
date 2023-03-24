import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Clock = ({ time, onStop, isRunning }) => {

  const parseTimeToSeconds = str => str ? str.split(':').reduce((acc, time) =>(60 * acc) + +time) : "";
  const formatSecondsToTime = seconds => {
     let hours = Math.floor(seconds / 3600);
     let minutes = Math.floor((seconds - (hours * 3600)) / 60);  
     let secs = seconds - (hours * 3600) - (minutes * 60);
     let  M, S;
    if (minutes < 10) M = (`0${minutes}`);
    if (secs < 10) S = (`0${secs}`);
    if (hours === 0) return(`${M || minutes} : ${S || secs}`);
    return (`${hours} : ${M || minutes} : ${S || secs}`);
  };
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    setSeconds(state => state = parseTimeToSeconds(time))
  }, [time])

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
    <div>{formatSecondsToTime(seconds ? seconds : "")}</div>
  )
};


const Timer = () => {
  const dispatch = useDispatch();
  const onStop = () => {
    dispatch({type: 'MOVE/STOP_MOVING'});
   };

  const whiteToMove = () => {
    dispatch({type: 'MOVE/WHITE_TO_MOVE'});
  };

  const blackToMove = () => {
    dispatch({type: 'MOVE/BLACK_TO_MOVE'});
  };

  const whiteTime = useSelector(state => state.selecter.whiteTime );
  const blackTime = useSelector(state => state.selecter.blackTime);
  const isWhiteRunning = useSelector(state => state.timer.isWhiteRunning);
  const isblackRunning = useSelector(state => state.timer.isBlackRunning);
  
 return (
   <div className='timer'>
    <div style={{padding: 20}}>
      <Clock
      time={whiteTime}
      onStop={onStop}
      isRunning={isWhiteRunning}
      />
      <button onClick={blackToMove}>black to move!</button>
    </div>
   
    <div style={{padding: 20}}>
      <Clock 
      time={blackTime ? blackTime : "00:00"}
      onStop={onStop}
      isRunning={isblackRunning}
      />
      <button onClick={whiteToMove}>white to move!</button>
    </div>
   </div>
 )
}

export default connect(null, null) (Timer);
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';


const selectedTime = state => {
  console.log(state);
  return state ? state.value : "00:))"
}

const Timer = () => {
 const time = useSelector(selectedTime);
console.log(time)
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState(''); 

  const handleStart = () => {

  };
  const handleStop = () => {

  };
  const handleReset = () => {
    handleStop();
  };
  
 return (
   <div className='timer'>

    <button onClick={handleStart} type="button">
      Start
    </button>
    <button onClick={handleStop} type="button">
      Stop
    </button>
    <button onClick={handleReset} type="button">
      Reset
    </button>
    <div style={{padding: 20}}>
      {twoDigits(minutes ? minutes : "00")}:
      {twoDigits(seconds ? seconds : "00")}
    </div>
   </div>
 )
}

export default connect(null, null) (Timer);

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




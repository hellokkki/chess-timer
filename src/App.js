
import { useState } from 'react';
import './App.scss';
import Timer from './components/Timer';
import SetTimeForm from './components/SetTimeForm';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


const mapDispatchToProps = state => {
  console.log(state)
  return {
    ...state,
    chessTimeValue: state
  }
}
connect(null, mapDispatchToProps)(SetTimeForm)

function App() {
  const dispatch = useDispatch();
   
   const handleSubmit = e => {
    dispatch({type: `TIME/SET_CHESS-TIME:${e}`});
    mapDispatchToProps(e);;
   };

  return (
    <div className="App">
  
      <main>
     <div className='select-block'>
     <SetTimeForm  onSubmit={e => handleSubmit(e)}/>
     </div>
     <div className='timer-block'>
      <Timer />
     </div>
      </main>
    </div>
  );
}

export default App;

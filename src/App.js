
import { useState } from 'react';
import './App.scss';
import Timer from './components/Timer';
import SetTimeForm from './components/SetTimeForm';
import { connect, Connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';


const mapStateToProps = state => {
  console.log(state)
  return {
    ...state,
    chessTimeValue: state
  }
}
connect(mapStateToProps, null)(SetTimeForm)

function App() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
   const whiteToMove = () => {
      
   };

   const blackToMove = () => {
    
   };
   
   const handleSubmit = e => {
    console.log(e)
    dispatch({type: `TIME/SELECT_CHESS-TIME:${e}`});
    console.log(e);
    mapStateToProps(e);
   }

  return (
    <div className="App">
  
      <main>
     <div className='select-block'>
     <SetTimeForm  onSubmit={e => handleSubmit(e)}/>
     </div>
     <div className='timer-block'>
      <Timer  />
     <button onClick={whiteToMove}>white!</button>
     <button onClick={blackToMove}>black!</button>
     </div>
      </main>
    </div>
  );
}

export default App;

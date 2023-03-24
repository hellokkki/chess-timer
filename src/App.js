
import './App.scss';
import Timer from './components/Timer';
import ChessTimeSetter from './components/ChessTimeSetter';

function App() {

  return (
    <div className="App">
  
      <main>
     <div className='select-block'>
     <ChessTimeSetter />
     </div>
     <div className='timer-block'>
      <Timer />
     </div>
      </main>
    </div>
  );
}

export default App;

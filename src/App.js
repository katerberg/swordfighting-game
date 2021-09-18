import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="battlefield">
          <img className="swordfighter" src="https://i.imgur.com/WRXGW2pg.png" alt="Swordfighting" />
          <img className="monster" src="https://www.psyborg.com.au/wp-content/uploads/2011/11/Illustration-Monster.jpg" alt="Monster" />
      </div>
      <div className="distance">3.4m</div>
      <div className="choices">
        <Button variant="contained">Attack</Button>
        <Button variant="outlined">Dodge</Button>
        <Button variant="outlined">Move</Button>
      </div>
    </div>
  );
}

export default App;

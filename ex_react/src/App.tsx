import { useState } from 'react';
import './App.css';
import { Table } from './table';
// import { Table } from './Table';

function App() {
  const [displayUser, setDisplayUser] = useState(false);

  return (
    <div className="App">
      {displayUser ? <Table /> : null}
      <p>
        <button type="button" onClick={() => setDisplayUser(true)}>
          Afficher 20 utilisateurs
        </button>
      </p>
    </div>
  );
}

export default App;

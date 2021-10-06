import './App.css';
import {useState} from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      { !user?.id && <Login setUser={setUser}/> }
    </div>
  );
}

export default App;

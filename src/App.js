import './App.css';
import {useState} from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Navbar setUser={setUser} isAuth={!!user}/>
      {
        user?.id 
        ? <Posts user={user}/>
        : <Login setUser={setUser}/>
      }
    </div>
  );
}

export default App;

import React ,{useEffect} from 'react'
import './App.css';
import { Login } from './Components/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  
  useEffect(() => {
    
    const token = getTokenFromUrl()
    console.log('I have a token >>>',token)
  }, [])
  return (
    <div className="app">
     
     {/*Spotify Logo */}
     
     {/* Login with spotify Button */}
     <Login/>
    </div>
  );
}

export default App;

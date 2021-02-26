import React, { useEffect, useState } from "react";
import "./App.css";
import {useDatalayerValue} from "./UseContext/Datalayer"
import { Login } from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { Player } from "./Components/Player";

//Wrapping spotify by creating a new API
const spotify = new SpotifyWebApi();

function App() {
  //Grabbing the reducer initial state & reducer 
  const [{},dispatch] = useDatalayerValue()
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      //Opening channel between spotify and this React app
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }

    console.log("I have a token >>>", token);
  }, []);

  return (
    <div className="app">
      {token ? <Player/> : <Login />}
      {/*Spotify Logo */}

      {/* Login with spotify Button */}
    </div>
  );
}

export default App;

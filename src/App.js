import React, { useEffect, useState } from "react";
import "./App.css";
import { useDatalayerValue } from "./UseContext/Datalayer";
import { Login } from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { Player } from "./Components/Player";

//Wrapping spotify by creating a new API
const spotify = new SpotifyWebApi();

function App() {
  //Grabbing the reducer initial state & reducer
  const [{ user, token }, dispatch] = useDatalayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //Opening channel between spotify and this React app
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //Reducer functionality >>
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("448Hwhpqil1JyN1JQtaQoo").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

    }

  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/*Spotify Logo */}

      {/* Login with spotify Button */}
    </div>
  );
}

export default App;

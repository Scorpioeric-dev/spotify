import React from "react";
import "../Style/Body.css";
import { useDatalayerValue } from "../UseContext/Datalayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Header } from "./Header";
import { SongRow } from "./SongRow";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export const Body = () => {
  const [{ discover_weekly }, dispatch] = useDatalayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:448Hwhpqil1JyN1JQtaQoo`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
      
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle onClick={playPlaylist}" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map(item => (
            <SongRow playSong={playSong} track={item.track} />
        ))}

      </div>
    </div>
  );
};

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token:null
};

//Reducer

const reducer = (state, action) => {
  console.log(action, "hit");
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
          return {
              ...state,
              token:action.token
          }
    default:
      return state;
  }
};

export default reducer;

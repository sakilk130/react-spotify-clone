export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //   token:
  //     'BQAYqJhIrDxOaatqSqEBNt0UODDGab2s2fbknkBz2PHjv7d0wEnXnC2wJCR1DJ5q6k65ckMtd_M9h5kOnOJgNpi23PAOJuEFJ5tMGqAgWY-ySaIFiwQ1G4WP0Fwb8kx8I14ud4w05V3pNTTvIU2B6EhoEv7HXdQ52CaSlvBTu6z6c75u',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

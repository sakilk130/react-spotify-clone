export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    'BQC1mEkSYKgYn-62G6LXv8lhB9ox6qla1rSBx9T0WB0o2PRzcuBk-2wweqQSNbkTS_xph484Hm_PJXgUgMwA9kZgQoeUU3EOUcQmqlO4FNhH1rnH6h15eSay9b3o6I44HXg1A036w_ohzWTBFVV_rr3-OuWv6N8qSAE3Ds5KqCX0TJdG',
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

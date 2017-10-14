import { REHYDRATE } from 'redux-persist/constants'

function songsReducer(state, action = 'ADD_SONG') {
  switch (action.type) {
    case "ADD_SONG" :
      return state.concat({name: action.payload.name, key: Math.floor((Math.random() * 1000) + 1)});
    case "REHYDRATE":
      var incoming = action.payload.songsReducer;
      if (incoming) return state;
      return state
    default:
      return state;
  }
}
export default songsReducer;

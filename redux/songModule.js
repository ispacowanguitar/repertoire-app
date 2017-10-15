import createModule from 'redux-create-module';

const addSongToState = (state, action) => {
  return state.concat({
    name: action.payload.name,
    key: Math.floor((Math.random() * 10000) + 1)
  });
}

const songsModule = createModule('songs', [
  {
    name: 'first song',
    key: 1
  }
], {addSong: addSongToState})
export default songsModule;

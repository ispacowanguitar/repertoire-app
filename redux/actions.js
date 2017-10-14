function addSong(song = {name: "default song", key: 1, type: "ADD_SONG"}) {
  return {
    type: 'ADD_SONG',
    payload: {
      key: song.key,
      name: song.name,
    },
  };
}

export default addSong;

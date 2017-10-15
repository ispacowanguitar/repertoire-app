import React from 'react';
import {connect} from 'react-redux';
import songsModule from '../redux/songModule.js';

const SongsListPresenter = (props) => {
  const {songs, dispatch} = props;
  var inputText = '';

  function handleChange(event) {
    inputText = event.target.value;
  }

  function handleSubmit(event) {
    dispatch(songsModule.actions.addSong({name: inputText}));
    inputText = 'poo';
    event.target.reset();
    event.preventDefault();
  }
  return (
    <div>
      <ul>
        {Array.from(songs).map((song) => <li key={song.key}>
          {song.name}
        </li>)
}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder={inputText} onChange={handleChange}/>
        <input type='submit' value='name'/>
      </form>
    </div>
  )
}
export default connect((state) => ({songs: state}))(SongsListPresenter);

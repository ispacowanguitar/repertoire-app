import React from 'react';
import { connect } from 'react-redux';
import addSong from '../redux/actions.js';

const SongsListPresenter = (props) => {
  const {songs} = props;
  var inputText = '';

  function handleChange(event) {
    inputText = event.target.value;
  }

  function handleSubmit(event) {
    props.addTheSong(addSong(
      {name: inputText, key: 7, type: "ADD_SONG"}
    ));
    event.target.value = 'poo';
    event.preventDefault();
  }
  return (
    <div>
      <ul>
        {
          Array.from(songs).map((song) =>
          <li key={song.key}>
            {song.name}
          </li>)
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder={`you just typed ${inputText}`}
          onChange={ handleChange } />
        <input
          type='submit'
          value='name'
          onChange={ handleChange }
           />
      </form>
    </div>
  )
}
const SongsListPresenterConnected = connect(
  function(state, ownProps) {
    return {songs: state}
  },
  function(dispatch, ownProps) {
    return ({addTheSong: (action) => dispatch(action)})
  }
)(SongsListPresenter)
export default SongsListPresenterConnected;

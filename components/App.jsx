import React, { Component } from 'react';
import SongsListPresenterConnected from './SongsListPresenter.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('hi');
  }
  componentWillMount() {
    console.log("hi");
  }
  render() {
    return (
        <div className="App">
          <SongsListPresenterConnected
          />
        </div>
    );
  }
}
export default App;

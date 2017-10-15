import React, {Component} from 'react';
import SongsListPresenter from './SongsListPresenter.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <SongsListPresenter/>
      </div>
    );
  }
}
export default App;

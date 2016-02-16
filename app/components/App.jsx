import React from 'react';
import Main from './Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends React.Component {
  render() {
    injectTapEventPlugin();
    return (
      <div id="content">
        <Main />
      </div>
    );
  }
}

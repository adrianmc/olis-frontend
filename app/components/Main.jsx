import React from 'react';
import Teams from './Teams';
import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';
import NotesContainer from './NotesContainer';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main-page">
        <div id="teams-column">
          <Teams />
        </div>
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="chat-column">
          <ChatContainer />
        </div>
        <div id="notes-column">
          <NotesContainer />
        </div>
      </div>
    );
  }
}

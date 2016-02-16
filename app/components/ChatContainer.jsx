import React from 'react';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import TextField from 'material-ui/lib/text-field';

export default class ChatContainer extends React.Component {
  componentDidMount() {
    autosize(document.querySelectorAll('textarea'));
  }

  handleEnterKeyDown = (e) => {
    if (e.shiftKey === true) {
      console.log('shift-key has been pressed')
    } else {
      // e.preventDefault();
      console.log('SUBMIT')
    }
  }

  render() {
    const inputStyle = {
      width: '100%'
    };
    return (
      <div id="chat-container">
        <div id="chat-header">
          <div className="header-body">
            <div className="chat-title">
              Q4 Sales Report
            </div>
            <div className="chat-meta">
              Adrian, Heyse, Clifton
            </div>
          </div>
          <div className="header-icon">
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Add user to conversation" />
              <MenuItem primaryText="Mute chat" />
              <MenuItem primaryText="See all users" />
              <MenuItem primaryText="See all links" />
              <MenuItem primaryText="Something else" />
            </IconMenu>
          </div>
        </div>
        <div id="chat-msg-area">
          <h2>Chat messages will go here.</h2>
        </div>
        <div id="chat-input">
          <TextField
            hintText="Enter your message here"
            multiLine={true}
            rows={1}
            rowsMax={10}
            inputStyle={inputStyle}
            onEnterKeyDown={this.handleEnterKeyDown}
          />
        </div>
      </div>
    );
  }
}

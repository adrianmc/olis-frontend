import React from 'react';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import Avatar from 'material-ui/lib/avatar';

import TextField from 'material-ui/lib/text-field';

export default class ChatContainer extends React.Component {
  componentDidMount() {
    // autosize(document.querySelectorAll('textarea'));
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
    return (
      <div id="chat-container">
        <div id="chat-header">
          <div className="header-body">
            <div className="chat-title">
              Q4 Sales Report
            </div>
            <div className="chat-meta">
              Nicky Cage, Billy Murray, Stevey Segal
            </div>
          </div>
          <div className="header-icon">
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Add people to chat" />
              <MenuItem primaryText="Change chat title" />
              <MenuItem primaryText="Chat info" />
            </IconMenu>
          </div>
        </div>
        <div id="chat-msg-area">
          <div className="chat-msg-item">
            <div className="chat-author">Nicky Cage</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="http://www.placecage.com/200/200" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>Form inputs offer a great opportunity to add some subtle and interesting effects to a web page.</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
          <div className="chat-msg-item">
            <div className="chat-author">Stevey Segal</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="https://www.stevensegallery.com/200/201" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>They are elements that your user will interact with at some point and making them fun to use can enhance the experience.</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
          <div className="chat-msg-item you">
            <div className="chat-author">Billy Murry</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="http://www.fillmurray.com/201/201" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>That's a really good point!</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
          <div className="chat-msg-item you">
            <div className="chat-author">Billy Murry</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="http://www.fillmurray.com/201/201" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>I have a longer sentence that I wanted to add. I hope that this will illustrate how line breaks look when I type something longer.</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
          <div className="chat-msg-item">
            <div className="chat-author">Nicky Cage</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="http://www.placecage.com/200/200" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>Form inputs offer a great opportunity to add some subtle and interesting effects to a web page.</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
          <div className="chat-msg-item">
            <div className="chat-author">Stevey Segal</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="https://www.stevensegallery.com/200/201" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>They are elements that your user will interact with at some point and making them fun to use can enhance the experience.</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
          <div className="chat-msg-item you">
            <div className="chat-author">Billy Murry</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="http://www.fillmurray.com/201/201" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>That's a really good point!</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
          <div className="chat-msg-item you">
            <div className="chat-author">Billy Murry</div>
            <div className="chat-primary">
              <div className="chat-avatar">
                <Avatar size={51} src="http://www.fillmurray.com/201/201" />
              </div>
              <div className="chat-body">
                <div className="chat-bubble">
                  <p>I have a longer sentence that I wanted to add. I hope that this will illustrate how line breaks look when I type something longer.</p>
                </div>
                <div className="chat-timestamp">5 minutes ago</div>
              </div>
            </div>
          </div>
        </div>
        <div id="chat-input">
        <div className="chat-input-bubble">
          <TextField
            
            hintText="Type your message here"
            multiLine={true}
            rows={1}
            rowsMax={10}
            style={{transition:'none', width: '95%', margin: '8px'}}
            onEnterKeyDown={this.handleEnterKeyDown}
          />
          </div>
        </div>
      </div>
    );
  }
}

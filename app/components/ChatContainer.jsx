import React from 'react';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import Avatar from 'material-ui/lib/avatar';

import TextField from 'material-ui/lib/text-field';
import ChatMessageItem from './ChatMessageItem';

export default class ChatContainer extends React.Component {

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
          <ChatMessageItem
            authorName='Nicky Cage'
            avatarSrc='http://www.placecage.com/200/200'
            content='Hey there, I had a question to ask you, Bill.'
            timestamp='an hour ago'
          />
          <ChatMessageItem
            authorName='Nicky Cage'
            avatarSrc='http://www.placecage.com/200/200'
            content="So, I had a look at the draft and was thinking if you'd be okay with a few changes."
            timestamp='30 minutes ago'
          />
          <ChatMessageItem
            authorName='Bill Murray'
            avatarSrc='http://www.fillmurray.com/201/201'
            content= "Hmmm"
            timestamp='23 minutes ago'
            selfAuthor
          />
          <ChatMessageItem
            authorName='Bill Murray'
            avatarSrc='http://www.fillmurray.com/201/201'
            content= "Let me think about this."
            timestamp='15 minutes ago'
            selfAuthor
          />
          <ChatMessageItem
            authorName='Nicky Cage'
            avatarSrc='http://www.placecage.com/200/200'
            content='Form inputs offer a great opportunity to add some subtle and interesting effects to a web page.'
            timestamp='10 minutes ago'
          />
          <ChatMessageItem
            authorName='Stevey Segal'
            avatarSrc='https://www.stevensegallery.com/200/201'
            content='They are elements that your user will interact with at some point and making them fun to use can enhance the experience.'
            timestamp='5 minutes ago'
          />
          <ChatMessageItem
            authorName='Bill Murray'
            avatarSrc='http://www.fillmurray.com/201/201'
            content= "That's a really good point!"
            timestamp='3 minutes ago'
            selfAuthor
          />
          <ChatMessageItem
            authorName='Bill Murray'
            avatarSrc='http://www.fillmurray.com/201/201'
            content= "I have a longer sentence that I wanted to add. I hope that this will illustrate how line breaks look when I type something longer."
            timestamp='a few seconds ago'
            selfAuthor
          />
        </div>

        <div id="chat-input">
        <div className="chat-input-container">
          <TextField
            hintText="Type your message here"
            multiLine={true}
            rows={1}
            rowsMax={10}
            style={{transition:'none', width: '90%', margin: '8px'}}
            onEnterKeyDown={this.handleEnterKeyDown}
          />
          </div>
        </div>
      </div>
    );
  }
}

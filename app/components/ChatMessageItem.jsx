import React from 'react';

import Avatar from 'material-ui/lib/avatar';

export default class ChatMessageItem extends React.Component {

  render() {

    const {
      authorName,
      avatarSrc,
      content,
      timestamp,
      selfAuthor,
    } = this.props;
    
    const authorClass = selfAuthor ? ' you' : '';

    return (
      <div className={'chat-msg-item' + authorClass}>
        <div className="chat-author">{authorName}</div>
        <div className="chat-primary">
          <div className="chat-avatar">
            <Avatar size={51} src={avatarSrc} />
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
              <p>{content}</p>
            </div>
            <div className="chat-timestamp">{timestamp}</div>
          </div>
        </div>
      </div>
    );
  }
}

ChatMessageItem.defaultProps = {
  authorName: 'Nicky Cage',
  avatarSrc: 'http://www.placecage.com/200/200',
  content: 'Form inputs offer a great opportunity to add some subtle and interesting effects to a web page.',
  timestamp: '5 minutes ago',
  selfAuthor: false,
};

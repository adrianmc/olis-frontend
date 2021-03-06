import React from 'react';

import Avatar from 'material-ui/lib/avatar';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import AvatarWithInfo from './AvatarWithInfo';
// import ReactMarkdown from 'react-markdown';

export default class ChatMessageItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovering: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovering: false });
  }

  handleItemTouchTap = (event, child) => {
    console.log('You have selected: ' + child.props.primaryText);
  }

  render() {

    const {
      authorName,
      avatarSrc,
      content,
      timestamp,
      selfAuthor,
    } = this.props;
    
    const authorClass = selfAuthor ? ' you' : '';
    const buttonStyle = () => {
      if (this.state.isHovering) {
        return ({
          padding: '0',
          width: '36px',
          height: '36px'
        });
      } else {
        return ({
          padding: '0',
          width: '36px',
          height: '36px',
          opacity: '0',
          pointerEvents: 'none',
        });
      }
    }
    const contextMenu = (
      <IconMenu
        onItemTouchTap={this.handleItemTouchTap}
        iconButtonElement={
          <IconButton 
            style={buttonStyle()}
          >
            <MoreVertIcon color="rgba(0,0,0,0.5)" />
          </IconButton>
        }
        anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Translate" />
        <MenuItem primaryText="Copy" />
        <MenuItem primaryText="Lorem Ipsum" />
      </IconMenu>
    );
    
    const hasTranslation = false;
    
    return (
      <div 
        className={'chat-msg-item' + authorClass}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="chat-author">{authorName}</div>
        <div className="chat-primary">
          <div className="chat-avatar">
            <AvatarWithInfo avatarSrc={avatarSrc} />
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
              <p>{content}</p>
              {/*<ReactMarkdown source='# This is a header\n\nAnd this is a paragraph' softBreak="br" escapeHtml />*/}
              {
                hasTranslation ? 
                <div style={{opacity: '0.5', marginTop:'8px'}}>
                  <hr/>
                  {content}
                </div>
                : null
              }
            </div>
            <div className="chat-timestamp">{timestamp}</div>
          </div>
          <div>
            {contextMenu}
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

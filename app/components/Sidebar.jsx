import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import ActionQuestionAnswer from 'material-ui/lib/svg-icons/action/question-answer';
import ActionSearch from 'material-ui/lib/svg-icons/action/search';
import SocialNotifications from 'material-ui/lib/svg-icons/social/notifications';

import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import RaisedButton from 'material-ui/lib/raised-button';

import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';

import ConversationItem from './ConversationItem';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const headerBarStyle = {
      backgroundColor: '#2F3F70'
    };
    const iconColor = "white";
    return (
      <div id="sidebar-container">
        <div id="sidebar-header">

          {/* Header Menu */}
          <div className="team-name" onClick={this.handleTouchTap}>
            <span>The A Team <i className="fa fa-fw fa-caret-down" /></span>
          </div>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            useLayerForClickAway={false}
            onRequestClose={this.handleRequestClose} 
          >
            <Menu style={{position:'relative'}} zDepth={0}>
              <MenuItem primaryText="Maps" />
              <MenuItem primaryText="Interesting option" />
              <MenuItem primaryText="Lorem Ipsum" />
              <MenuItem primaryText="Do something" />
            </Menu>
          </Popover>

          {/* Header Icons */}
          <div className="header-icon">
            <IconButton tooltip="New Conversation">
              <ActionQuestionAnswer color={iconColor} />
            </IconButton>
          </div>
          <div className="header-icon">
            <IconButton tooltip="Search">
              <ActionSearch color={iconColor} />
            </IconButton>
          </div>
          <div className="header-icon">
            <IconButton tooltip="Notifications">
              <SocialNotifications color={iconColor} />
            </IconButton>
          </div>
        </div>

        {/* Conversation List */}
        <div id="conversation-list">
          <ConversationItem
              title='Chat Title'
              timeString='34 minutes ago'
              previewText="Today's meeting minutes has been summarized into the notes on the side of this conversation."
              avatarSrc='http://www.placecage.com/200/200'
              unread={true}
              unreadCount={12}
          />
          <ConversationItem
              title='Christmas Party'
              timeString='2 hours ago'
              previewText="Does anyone know where we are going to meet? Please put it in the notes for this conversation."
              avatarSrc='http://www.placecage.com/200/201'
              unread={true}
              unreadCount={2}
          />
          <ConversationItem
              title='Q4 Sales Report'
              timeString='Yesterday'
              previewText="This was a very difficult report, we're going to need all hands on deck for this one."
              avatarSrc='http://www.placecage.com/201/200'
              active
          />
          <ConversationItem
              title='Maintenance Work This Weekend'
              timeString='2 days ago'
              previewText="Make sure not to get locked in if you're working over time!"
              avatarSrc='http://www.placecage.com/199/200'
          />
          <ConversationItem
              title='Lunch?'
              timeString='3 days ago'
              previewText="Anyone up for lunch?"
              avatarSrc='http://www.placecage.com/199/198'
          />
          <ConversationItem
              title='Need water!'
              timeString='5 days ago'
              previewText="Water cooler's running low, can someone fetch Emma to make the order?"
              avatarSrc='http://www.placecage.com/201/198'
          />
          <ConversationItem
              title='New Hire: Bill'
              timeString='last week'
              previewText="Everyone let's welcome Mr. Murray!"
              avatarSrc='http://www.fillmurray.com/200/200'
          />
          <ConversationItem
              title='Stephen: Please keep quiet'
              timeString='last week'
              previewText="It's getting too noisy in here!"
              avatarSrc='http://www.fillmurray.com/210/209'
          />
          <ConversationItem
              title='Chat Title'
              timeString='last week'
              previewText="Today's meeting minutes has been summarized into the notes on the side of this conversation."
              avatarSrc='http://www.placecage.com/200/205'
              unread={true}
              unreadCount={12}
          />
          <ConversationItem
              title='Christmas Party'
              timeString='last week'
              previewText="Does anyone know where we are going to meet? Please put it in the notes for this conversation."
              avatarSrc='http://www.placecage.com/200/201'
              unread={true}
              unreadCount={2}
          />
          <ConversationItem
              title='Q4 Sales Report'
              timeString='last week'
              previewText="This was a very difficult report, we're going to need all hands on deck for this one."
              avatarSrc='http://www.placecage.com/201/200'
          />
          <ConversationItem
              title='Maintenance Work This Weekend'
              timeString='last week'
              previewText="Make sure not to get locked in if you're working over time!"
              avatarSrc='http://www.placecage.com/199/200'
          />
          <ConversationItem
              title='Lunch?'
              timeString='last week'
              previewText="Anyone up for lunch?"
              avatarSrc='http://www.placecage.com/199/198'
          />
          <ConversationItem
              title='Need water!'
              timeString='last week'
              previewText="Water cooler's running low, can someone fetch Emma to make the order?"
              avatarSrc='http://www.placecage.com/201/198'
          />
          <ConversationItem
              title='New Hire: Bill'
              timeString='2 weeks ago'
              previewText="Everyone let's welcome Mr. Murray!"
              avatarSrc='http://www.fillmurray.com/200/200'
          />
          <ConversationItem
              title='Stephen: Please keep quiet'
              timeString='3 weeks ago'
              previewText="It's getting too noisy in here!"
              avatarSrc='http://www.fillmurray.com/204/200'
          />
        </div>
      </div>
    );
  }
}

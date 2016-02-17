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

import Avatar from 'material-ui/lib/avatar';
import Badge from 'material-ui/lib/badge';

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
    const badgeStyle = {
      top: '-6px',
      right: '-6px',
      pointerEvents: 'none',
      // backgroundColor: 'blue', // change badge colour here
    };
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
            onRequestClose={this.handleRequestClose}
            
          >
            <Menu animated={false} >
              <MenuItem primaryText="Maps" />
              <MenuItem primaryText="Books" />
              <MenuItem primaryText="Flights" />
              <MenuItem primaryText="Apps" />
              <Divider />
              <RaisedButton primary={true} label="Logout"/>
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
          <div className="conversation-item">
            <div className="chat-avatar">
              <Badge
                    badgeContent={12}
                    primary={true}
                    style={{padding:'0',display:'block'}}
                    badgeStyle={badgeStyle}
                  >
                  <Avatar size={51} src="http://www.placecage.com/200/200" />
                </Badge>
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">Today's Meeting</div>
                <div className="chat-time">32 minutes ago</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  Today's meeting minutes has been summarized into the notes on the side of this conversation.
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-item">
            <div className="chat-avatar">
              <Badge
                    badgeContent={1}
                    primary={true}
                    style={{padding:'0',display:'block'}}
                    badgeStyle={badgeStyle}
                  >
                <Avatar size={51} src="http://www.placecage.com/200/201" />
              </Badge>
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">Christmas Party</div>
                <div className="chat-time">2 hours ago</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  Does anyone know where we are going to meet? Please put it in the notes for this conversation.
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-item active">
            <div className="chat-avatar">
              <Avatar size={51} src="http://www.placecage.com/201/200" />
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">Q4 Sales Report</div>
                <div className="chat-time">Yesterday</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  This was a very difficult report, we're going to need all hands on deck for this one.
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-item">
            <div className="chat-avatar">
              <Avatar size={51} src="http://www.placecage.com/199/200" />
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">Maintenance Work This Weekend</div>
                <div className="chat-time">2 days ago</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  Make sure not to get locked in if you're working over time!
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-item">
            <div className="chat-avatar">
              <Avatar size={51} src="http://www.placecage.com/199/198" />
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">Lunch?</div>
                <div className="chat-time">3 days ago</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  Anyone up for lunch?
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-item">
            <div className="chat-avatar">
              <Avatar size={51} src="http://www.placecage.com/201/198" />
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">Need Water</div>
                <div className="chat-time">5 days ago</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  Water cooler's running low, can someone fetch Emma to make the order?
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-item">
            <div className="chat-avatar">
              <Avatar size={51} src="http://www.fillmurray.com/200/200" />
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">New Hire: Bill</div>
                <div className="chat-time">Last week</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  Everyone let's welcome Mr. Murray!
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-item">
            <div className="chat-avatar">
              <Avatar size={51} src="http://www.stevensegallery.com/200/200" />
            </div>
            <div className="chat-body">
              <div className="chat-main">
                <div className="chat-title">Stephen: Please keep quiet</div>
                <div className="chat-time">Last week</div>
              </div>
              <div className="chat-secondary">
                <div className="chat-status">
                  It's getting a little too noisy over there!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

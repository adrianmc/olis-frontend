import React from 'react';

import IconButton from 'material-ui/lib/icon-button';
import SocialNotifications from 'material-ui/lib/svg-icons/social/notifications';
import Popover from 'material-ui/lib/popover/popover';

import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

export default class HeaderNotifications extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const iconColor = 'white';
    return (
      <div>
        
        <div className="header-icon">
          <IconButton
            onClick={this.handleOpen}
            tooltip="Notifications"
          >
            <SocialNotifications color={iconColor} />
          </IconButton>
        </div>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          useLayerForClickAway={false}
          onRequestClose={this.handleClose}
        >
        <div style={{maxHeight:'480px'}}>
          <List subheader="Today">
            <Divider />
            <ListItem
              primaryText="Q4 Sales Report"
              secondaryText={<span><span style={{color:'#00bcd4'}}>Brendan Lim</span> has mentioned you.</span>}
              leftAvatar={<Avatar src="https://www.placecage.com/100/100" />}
            />
            <Divider />
            <ListItem
              primaryText="Q4 Sales Report"
              secondaryText={<span><span style={{color:'#00bcd4'}}>Brendan Lim</span> has replied to the thread.</span>}
              leftAvatar={<Avatar src="https://www.placecage.com/100/100" />}
            />
            <Divider />
            <ListItem
              primaryText="Lunch?"
              secondaryText={<span><span style={{color:'#00bcd4'}}>Eric Hoffman</span> and <span style={{color:'#00bcd4'}}>2 others</span> has replied to the thread.</span>}
              leftAvatar={<Avatar src="https://www.placecage.com/100/101" />}
            />
            <Divider />
          </List>
          
          <List subheader="Yesterday">
            <Divider />
            <ListItem
              primaryText="New Hire: Bill"
              secondaryText={<span><span style={{color:'#00bcd4'}}>Nicky Cage</span> has replied to the thread.</span>}
              leftAvatar={<Avatar src="https://www.placecage.com/101/101" />}
            />
            <Divider />
            <ListItem
              primaryText="Christmas Party"
              secondaryText={<span><span style={{color:'#00bcd4'}}>Nicky Cage</span> and <span style={{color:'#00bcd4'}}>2 others</span> has replied to the thread.</span>}
              leftAvatar={<Avatar src="https://www.placecage.com/100/100" />}
            />
          </List>
        </div>
        </Popover>
      </div>
    );
  }
}

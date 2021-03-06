import React from 'react';
import Popover from 'material-ui/lib/popover/popover';

import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';

import Avatar from 'material-ui/lib/avatar';

import AddPersonIcon from 'material-ui/lib/svg-icons/social/person-add';
import TeamDirIcon from 'material-ui/lib/svg-icons/action/list';
import TeamInfoIcon from 'material-ui/lib/svg-icons/action/info';
import TeamSettingsIcon from 'material-ui/lib/svg-icons/action/settings';

import RaisedButton from 'material-ui/lib/raised-button';
import LogoutIcon from 'material-ui/lib/svg-icons/action/exit-to-app';

export default class HeaderSearch extends React.Component {

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

  componentWillUnmount() {
    if (this.timerCloseId) {
      clearTimeout(this.timerCloseId);
    }
  }

  timerCloseId = undefined

  handleItemTouchTap = (event, child) => {
    this.timerCloseId = setTimeout(() => {
        this.handleClose();
        // TODO - do the thing the user wants
        console.log('You have selected: ' + child.props.primaryText);
      }, 200);
  }

  render() {
    return (
      <div style={{flexGrow:'1'}}>
        
        <div className="team-name" onClick={this.handleOpen}>
          <span>The A Team <i className="fa fa-fw fa-caret-down" /></span>
        </div>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          useLayerForClickAway={false}
          onRequestClose={this.handleClose} 
        >
          <Menu 
            className="header-menu"
            style={{position:'relative'}} 
            zDepth={0}
            onItemTouchTap={this.handleItemTouchTap}  
          >
            <MenuItem style={{paddingTop:'12px',paddingBottom:'12px'}}>
              <div style={{display: 'flex'}}>
                <Avatar size={72} src={'http://www.fillmurray.com/200/201'} />
                <div style={{padding:'12px'}}>
                  <div className="menu-name">Billy Murray</div>
                  <div className="menu-my-account">My Account</div>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem primaryText="Invite to team" leftIcon={<AddPersonIcon />}/>
            <MenuItem primaryText="Team directory" leftIcon={<TeamDirIcon />} disabled/>
            <MenuItem primaryText="Team info" leftIcon={<TeamInfoIcon />} disabled/>
            <MenuItem primaryText="Team settings" leftIcon={<TeamSettingsIcon />} disabled/>
            <Divider />
            <MenuItem innerDivStyle={{background:'white'}}>
              <div style={{display: 'flex'}}>
                <RaisedButton
                  label="Logout"
                  primary={true}
                  style={{lineHeight:'36px'}}
                  labelStyle={{verticalAlign:'middle'}}
                  labelPosition="before"
                  icon={<LogoutIcon />}
                  fullWidth
                />
              </div>
            </MenuItem>
          </Menu>
        </Popover>
      </div>
    );
  }
}

import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import Badge from 'material-ui/lib/badge';

export default class Teams extends React.Component {
  render() {
    const bgColor = "#253256";
    const addTeamIconStyle = {
      fontSize:'36px',
      color: bgColor,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    };
    const settingsIconStyle = {
      fontSize:'36px',
      color: 'white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    };
    const badgeStyle = {
      top: '-5px',
      right: '-5px',
      pointerEvents: 'none',
      // backgroundColor: 'blue', // change badge colour here
    };
    return (
      <div id="team-list">

        {/* Active Team Button */}
        <div className="team-item active">
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/iflendra/128.jpg" alt=""/>
        </div>
        
        {/* Regular Team Button */}
        <div className="team-item">
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/vladabazhan/128.jpg" alt=""/>
        </div>
        
        {/* A Team Button w/ a Notification Badge */}
        <Badge
          badgeContent={4}
          primary={true}
          style={{padding:'0',display:'block'}}
          badgeStyle={badgeStyle}
        >
          <div className="team-item">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/getsocial_now/128.jpg" alt=""/>
          </div>
        </Badge>

        {/* Two Buttons That Always Persist */}
        <div className="team-item add-team">
          <IconButton
            iconClassName="material-icons"
            tooltip="Add team"
            tooltipPosition="top-center"
            iconStyle={addTeamIconStyle}
          >
            add
          </IconButton>
        </div>
        <div className="team-item team-settings no-box">
          <IconButton
            iconClassName="material-icons"
            tooltip="Manage your teams"
            tooltipPosition="top-right"
            iconStyle={settingsIconStyle}
          >
            settings
          </IconButton>
        </div>
      </div>
    );
  }
}

import React from 'react';

import PageWrapper from './PageWrapper';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';

import SettingsCard from './SettingsCard';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import IconButton from 'material-ui/lib/icon-button';
import AddIcon from 'material-ui/lib/svg-icons/content/add-box';

import ChangeTeamName from './TeamSettings/ChangeTeamName';
import Permissions from './TeamSettings/Permissions';
import InviteTeammates from './TeamSettings/InviteTeammates';

export default class TeamSettings extends React.Component {
  
  render() {
    const backgroundColor = "#efefef"
    const highlightColor = "#9e9e9e";
    const tabStyle = {
      color: highlightColor,
    }
    const teamName = "The A Team";
    return (
      <PageWrapper
        title={"Team Settings: " + teamName}
        backButton
        >
        <Tabs
          style={{margin:'0 -25px'}}
          tabItemContainerStyle={{background:backgroundColor}}
          contentContainerStyle={{padding:'25px 25px 0'}}
        >
          <Tab
            style={tabStyle}
            icon={<FontIcon className="material-icons" color={highlightColor}>settings</FontIcon>}
            label="General"
          >

            <ChangeTeamName />
            
          </Tab>
          <Tab
            style={tabStyle}
            icon={<FontIcon className="material-icons" color={highlightColor}>people</FontIcon>}
            label="Permissions"
          >

            <Permissions />

          </Tab>
          <Tab
            style={tabStyle}
            icon={<FontIcon className="material-icons" color={highlightColor}>person_add</FontIcon>}
            label="Invite Teammates"
          >

            <InviteTeammates />

          </Tab>
        </Tabs>
      </PageWrapper>
    );
  }
}
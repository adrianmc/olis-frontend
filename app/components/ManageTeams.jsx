import React from 'react';

import FlatButton from 'material-ui/lib/flat-button';
import BackIcon from 'material-ui/lib/svg-icons/navigation/arrow-back';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import IconButton from 'material-ui/lib/icon-button';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';

import NameIcon from 'material-ui/lib/svg-icons/action/info';
import MembersIcon from 'material-ui/lib/svg-icons/social/group';
import ConvosIcon from 'material-ui/lib/svg-icons/action/question-answer';
import TimeIcon from 'material-ui/lib/svg-icons/device/access-time';

export default class ManageTeams extends React.Component {
  
  handleTeamSettingsClick = (teamId, event) => {
    console.log(`switch to team settings for team id: ${teamId}`);
  }

  handleTeamNameClick = (teamId, event) => {
    console.log(`switch to chat view for team id: ${teamId}`);
  }  

  render() {

    const teamRowItems = this.props.teams.map(team => {
      return (
        <TableRow key={team.id}>
          <TableRowColumn style={{width:'72px'}}>
            <IconButton
              onClick={this.handleTeamSettingsClick.bind(this, team.id)}
              team="tester"
            >
              <SettingsIcon />
            </IconButton>
          </TableRowColumn>
          <TableRowColumn>
            <div
              style={{fontWeight:'700',fontSize:'16px',cursor:'pointer'}}
              onClick={this.handleTeamNameClick.bind(this, team.id)}
            >
              {team.name}
            </div>
          </TableRowColumn>
          <TableRowColumn>{team.members} Members</TableRowColumn>
          <TableRowColumn>{team.conversations} Conversations</TableRowColumn>
          <TableRowColumn>{team.lastUpdated}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div id="manage-teams-wrapper">
        <div>
          <p>
            <FlatButton
              label="Back to Chat"
              secondary={true}
              icon={<BackIcon />}
            />
          </p>
          <h1>Manage Teams</h1>
          <p>Manage the teams that you are a part of.</p>
          <Table
            selectable={false}
          >
            <TableHeader
              adjustForCheckbox={false}
              displaySelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn
                  style={{
                    width:'72px'
                  }}
                >
                </TableHeaderColumn>
                <TableHeaderColumn>
                  <div className="table-header-wrapper">
                    <div className="table-header-div">
                      <NameIcon color="#9E9E9E"/>
                      <div>Team Name</div>
                    </div>
                  </div>
                </TableHeaderColumn>
                <TableHeaderColumn>
                  <div className="table-header-wrapper">
                    <div className="table-header-div">
                      <MembersIcon color="#9E9E9E"/>
                      <br />
                      Members
                    </div>
                  </div>
                </TableHeaderColumn>
                <TableHeaderColumn>
                  <div className="table-header-wrapper">
                    <div className="table-header-div">
                      <ConvosIcon color="#9E9E9E"/>
                      <br />
                      Conversations
                    </div>
                  </div>
                </TableHeaderColumn>
                <TableHeaderColumn>
                  <div className="table-header-wrapper">
                    <div className="table-header-div">
                      <TimeIcon color="#9E9E9E"/>
                      <br />
                      Last Updated
                    </div>
                  </div>
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover
            >
              {teamRowItems}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

ManageTeams.defaultProps = {
  teams: [
    {id: 'team_a_UUID', name: 'Alpha Company', members: 3, conversations: 21, lastUpdated: 1456394486},
    {id: 'team_b_UUID', name: 'Beta Bunch', members: 13, conversations: 121, lastUpdated: 1456384486},
    {id: 'team_c_UUID', name: 'Charlie Corporation', members: 1, conversations: 12, lastUpdated: 1456394386},
  ],
};

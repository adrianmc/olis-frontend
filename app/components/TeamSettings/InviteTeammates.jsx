import React from 'react';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import IconButton from 'material-ui/lib/icon-button';
import AddIcon from 'material-ui/lib/svg-icons/content/add-box';


export default class InviteTeammates extends React.Component {
  
  render() {
    return (
      <div>
        <p>Enter in the email addresses of the teammates you would like to invite:</p>
        <div>
          <TextField
            hintText="your.name@example.com"
            floatingLabelText="Email"
          />
        </div>

        <div>
          <TextField
            hintText="your.name@example.com"
            floatingLabelText="Email"
          />
        </div>

        <div>
          <TextField
            hintText="your.name@example.com"
            floatingLabelText="Email"
          />
          <IconButton tooltip="Invite More">
            <AddIcon color="#aaaaaa"/>
          </IconButton>
        </div>

        <div style={{margin:'14px 0'}}>
          <RaisedButton
            label="Invite Teammates"
            secondary={true}
          />
        </div>
        </div>
    );
  }
}
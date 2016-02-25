import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import TextField from 'material-ui/lib/text-field';

import SettingsCard from './SettingsCard';

export default class MyAccountSettings extends React.Component {
  
  render() {
    const cardTextStyle = {
      background: "url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/cubes.png)",
      // background: '#f0f0f9',
      borderTop:'1px solid rgba(0,0,0,0.05)',
      borderBottom:'1px solid rgba(0,0,0,0.05)',
    };
    return (
      <div>

        <SettingsCard
          title="Change Username"
          subtitle="This is the name that other users will see."
          submitButtonText="Change Username"
        >
          <p>Your current username is: </p>
          <TextField
            defaultValue="CurrentUserName"
            hintText="Choose a recognizable username"
            floatingLabelText="New Username"
          />
        </SettingsCard>

        <SettingsCard
          title="Change Password"
          subtitle="This is the password that you use to login."
          resetButtonText="Clear Fields"
          submitButtonText="Change Password"
        >
          <p>If you would like to change your password, you may do so by filling out these three fields:</p>
          <TextField
            floatingLabelText="Old Password"
            type="password"
          /><br/>
          <TextField
            hintText="Something hard to guess!"
            floatingLabelText="New Password"
            type="password"
          /><br/>
          <TextField
            hintText="Type it again"
            floatingLabelText="Confirm New Password"
            type="password"
          />  
        </SettingsCard>

        <SettingsCard
          title="Change Email"
          subtitle="This is the email that you will be contacted with."
          submitButtonText="Change Email"
        >
          <p>Your current email is: </p>
          <TextField
            hintText="your_name@example.com"
            floatingLabelText="New Email"
          />
        </SettingsCard>

        <SettingsCard
          title="Change Timezone"
          subtitle="Set a custom timezone or let us detect your system settings."
        >
          Have a checkbox for "Automatically detect system time", and when you uncheck it, it will enable the select box for you to choose a custom timezone.
        </SettingsCard>

        <SettingsCard
          title="Change Translation Language"
          subtitle="Choose the default language to translate into."
          style={{marginBottom: 'none'}}
        >
          Here, put a select box with all of the supported translation languages.
        </SettingsCard>

      </div>
    );
  }
}
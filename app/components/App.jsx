import React from 'react';
import Main from './Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ManageTeams from './ManageTeams';
import MyAccount from './MyAccount';
import Create1 from './onboarding/CreateAccountTeamName';
import Create2 from './onboarding/CreateAccountUsername';
import Create3 from './onboarding/CreateAccountEmail';
import Create4 from './onboarding/CreateAccountInviteTeammates';
import Login from './Login';
import SetPassword from './onboarding/SetPassword';

export default class App extends React.Component {
  render() {
    injectTapEventPlugin();
    return (
      <div id="content">
        <SetPassword />
      </div>
    );
  }
}

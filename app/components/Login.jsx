import React from 'react';

import PageWrapper from './PageWrapper';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import IconButton from 'material-ui/lib/icon-button';
import AddIcon from 'material-ui/lib/svg-icons/content/add-box';

export default class Login extends React.Component {
  render() {
    return (
      <PageWrapper
        hideTitle={true}
        fullHeight={false}
        width="420px"
      >
      <div style={{textAlign:'center'}}>
        <div
          style={{
            fontSize: '72px',
            fontWeight: '900',
            color: 'rgba(0,0,0,0.5)'
          }}
        >
          Olis
        </div>

        <div>
          <TextField floatingLabelText="Username or Email"/>
        </div>

        <div>
          <TextField
            floatingLabelText="Password"
            type="password"
          />
        </div>

        <div style={{margin:'14px 0'}}>
          <RaisedButton
            label="Login"
            primary={true}
          />
        </div>

        <p style={{opacity:'0.5'}}><a href="#">Forgot your password?</a></p>
      </div>
      </PageWrapper>
    );
  }
}

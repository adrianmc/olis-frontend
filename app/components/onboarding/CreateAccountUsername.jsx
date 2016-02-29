import React from 'react';

import PageWrapper from '../PageWrapper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class CreateAccountUsername extends React.Component {
  render() {
    return (
      <PageWrapper
        title="Create a Username"
        description="This will be shown to others in your team. You can change this later."
        showDescription={true}
        backButton={true}
        backButtonLabel='Back'
        fullHeight={false}
        width="420px"
      >
        <TextField
          hintText="UserName123"
          floatingLabelText="Username"
          fullWidth
        />
        <div style={{margin:'14px 0'}}>
          <RaisedButton
            label="Next Step"
            secondary={true}
          />
        </div>
      </PageWrapper>
    );
  }
}

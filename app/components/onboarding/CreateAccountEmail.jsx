import React from 'react';

import PageWrapper from '../PageWrapper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class CreateAccountEmail extends React.Component {
  render() {
    return (
      <PageWrapper
        title="Set Your Email"
        description="Login, password changes, and notifications will be sent to this address. You can change this later."
        showDescription={true}
        backButton={true}
        backButtonLabel='Back'
        fullHeight={false}
        width="420px"
      >
        <TextField
          hintText="your.name@example.com"
          floatingLabelText="Email"
          fullWidth
        />
        <p>
          <RaisedButton
            label="Next Step"
            secondary={true}
          />
        </p>
      </PageWrapper>
    );
  }
}

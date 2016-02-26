import React from 'react';

import SettingsCard from './SettingsCard';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class MyAccountSettings extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: "English"};
  }

  handleReset = () => this.setState({value: "English"});

  handleChange = (event, index, value) => this.setState({value});

  handleSubmit = () => {
    const targetLanguage = this.state.value;
    console.log(`Change language to ${targetLanguage}`);
  }

  render() {
    return (
      <SettingsCard
        title="Change Translation Language"
        subtitle="Choose the default language to translate into."
        style={{marginBottom: 'none'}}
        resetButtonText="Reset to English"
        submitButtonText={`Change to ${this.state.value}`}
        handleReset={this.handleReset}
        handleSubmit={this.handleSubmit}
        disableReset
        disableSubmit
        actionText="This setting is updated on change."
      >
        <p>Select one of the following languages:</p>
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value="English" primaryText="English"/>
          <MenuItem value="French" primaryText="French"/>
          <MenuItem value="Spanish" primaryText="Spanish"/>
        </SelectField>
      </SettingsCard>
    );
  }
}
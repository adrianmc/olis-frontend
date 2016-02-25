import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

export default class SettingsCard extends React.Component {
  
  render() {
    
    const {
      title,
      subtitle,
      resetButtonText,
      submitButtonText,
      handleReset,
      handleSubmit,
      style,
      children,
    } = this.props;

    const defaultStyle = {marginBottom:'25px'};

    const cardStyle = style ? Object.assign(defaultStyle, style) : defaultStyle;

    const cardTextStyle = {
      background: "url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/cubes.png)",
      borderTop:'1px solid rgba(0,0,0,0.05)',
      borderBottom:'1px solid rgba(0,0,0,0.05)',
    };

    return (
      <Card style={cardStyle}>
        <CardHeader
          title={ title }
          subtitle={ subtitle }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true} style={cardTextStyle}>
          { children }
        </CardText>
        <CardActions expandable={true}>
          <FlatButton 
            label={ resetButtonText }
            onClick={ handleReset }
          />
          <RaisedButton 
            label={ submitButtonText }
            secondary={true}
            onClick={ handleSubmit }
          />
        </CardActions>
      </Card>
    );
  }
}

SettingsCard.defaultProps = {
  title: "Setting Card Title",
  subtitle: "Subtitle for the setting card, typically a sentence long.",
  children: <div>Child Nodes</div>,
  resetButtonText: "Reset",
  submitButtonText: "Submit",
  handleReset: function(){console.log('handleReset')},
  handleSubmit: function(){console.log('handleSubmit')},
}
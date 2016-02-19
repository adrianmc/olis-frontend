import React from 'react';

import IconButton from 'material-ui/lib/icon-button';
import ActionQuestionAnswer from 'material-ui/lib/svg-icons/action/question-answer';
import Popover from 'material-ui/lib/popover/popover';

export default class HeaderNewConversation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const iconColor = 'white';
    return (
      <div>
        
        <div className="header-icon">
          <IconButton
            onClick={this.handleOpen}
            tooltip="New Conversation"
          >
            <ActionQuestionAnswer color={iconColor} />
          </IconButton>
        </div>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          useLayerForClickAway={false}
          onRequestClose={this.handleClose} 
        >
          <h1>New Convo Stuff Here</h1>
        </Popover>
      </div>
    );
  }
}

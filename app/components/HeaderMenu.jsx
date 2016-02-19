import React from 'react';
import Popover from 'material-ui/lib/popover/popover';

import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';

export default class HeaderSearch extends React.Component {

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

  componentWillUnmount() {
    if (this.timerCloseId) {
      clearTimeout(this.timerCloseId);
    }
  }

  timerCloseId = undefined

  handleItemTouchTap = (event, child) => {
    this.timerCloseId = setTimeout(() => {
        this.handleClose();
        // TODO - do the thing the user wants
        console.log('You have selected: ' + child.props.primaryText);
      }, 200);
  }

  render() {
    return (
      <div style={{flexGrow:'1'}}>
        
        <div className="team-name" onClick={this.handleOpen}>
          <span>The A Team <i className="fa fa-fw fa-caret-down" /></span>
        </div>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          useLayerForClickAway={false}
          onRequestClose={this.handleClose} 
        >
          <Menu 
            style={{position:'relative'}} 
            zDepth={0}
            onItemTouchTap={this.handleItemTouchTap}  
          >
            <MenuItem primaryText="Maps"/>
            <MenuItem primaryText="Interesting option" />
            <MenuItem primaryText="Lorem Ipsum" />
            <MenuItem primaryText="Do something" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

import React from 'react';

import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
import BackIcon from 'material-ui/lib/svg-icons/navigation/arrow-back';

export default class PageWrapper extends React.Component {
  
  render() {
    
    const {
      title,
      backButton,
      backButtonLabel,
      showDescription,
      lightDescription,
      description,
      children,
    } = this.props;

    const backgroundColor = "#efefef"
    const highlightColor = "#9e9e9e";

    const descriptionStyle = {
      margin:'25px -25px',
      padding:'25px',
      color: lightDescription ? highlightColor : "white",
      background: lightDescription ? backgroundColor : highlightColor,
    }
    
    return (
      <div style={{height:'100%',overflow:'auto'}}>
        <div style={{
          width: '920px',
          minHeight: '100%',
          margin: 'auto',
          padding: '36px 0',
          display: 'table',
          height: 'inherit',
        }}>
          <Paper style={{height:'100%',padding:'25px',display:'table-cell'}} zDepth={2}>
            
            {
              backButton ? 
              <FlatButton
                label={this.props.backButtonLabel}
                secondary={true}
                icon={<BackIcon />}
              />
              :
              null
            }

            <div style={{color:'#9e9e9e'}}>
              <h1>{ title }</h1>
            </div>

            {
              showDescription ?
              <div style={descriptionStyle}>
                { this.props.description }
              </div>
              :
              null
            }

            <div>
              { children }
            </div>

          </Paper>
        </div>
      </div>
    );
  }
}

PageWrapper.defaultProps = {
  title: "My Title",
  backButton: false,
  backButtonLabel: "Back to Chat",
  showDescription: false,
  lightDescription: true,
  description: "This is where you can describe the purpose of this page.",
};

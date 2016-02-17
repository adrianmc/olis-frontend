import React from 'react';
import ContentUndo from 'material-ui/lib/svg-icons/content/undo';
import ContentRedo from 'material-ui/lib/svg-icons/content/redo';

export default class NotesContainer extends React.Component {
  render() {
    return (
      <div id="notes-container">
        <div className="notes-data-wrapper">
          <h1>Meeting Notes</h1>
          <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
        </div>
        <div className="notes-icon-bar">
          <i className="fa fa-fw fa-undo"></i>
          <i className="fa fa-fw fa-undo fa-flip-horizontal"></i>
        </div>
      </div>
    );
  }
}

import React from 'react';

import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
// import Divider from 'material-ui/lib/divider';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class Permissions extends React.Component {
  
  handleRoleChange = (userId, event, index, value) => {
    console.log(`Change user w/ userId: ${userId}`);
    console.log(`to role w/ roleId: ${value}`);
  }

  render() {

    const userRowItems = this.props.users.map(user => {
      const {
        id,
        username,
        avatarSrc,
        role,
      } = user;
      return (
        <TableRow key={id}>
            <TableRowColumn style={{width:'72px'}}>
              <Avatar style={{verticalAlign:'inherit'}} src={ avatarSrc } />
            </TableRowColumn>
            <TableRowColumn>{ username }</TableRowColumn>
            <TableRowColumn>
              <SelectField value={ role } onChange={this.handleRoleChange.bind(this, id)}>
                <MenuItem value={1} primaryText="Member"/>
                <MenuItem value={2} primaryText="Admin"/>
              </SelectField>
            </TableRowColumn>
          </TableRow>
      );
    });

    return (
      <div>
        <p>Admins are able to delete messages and conversations. You must be an admin to change these settings.</p>
        <Table selectable={false}>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn style={{width:'72px'}}>Avatar</TableHeaderColumn>
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>Role</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            { userRowItems }
          </TableBody>
        </Table>
      </div>
    );
  }
}

Permissions.defaultProps = {
  users: [
    {id: 1, username: 'NickyC', avatarSrc: 'https://www.placecage.com/100/101', role: 1},
    {id: 2, username: 'BillM', avatarSrc: 'https://www.placecage.com/101/101', role: 2},
    {id: 3, username: 'ClintonD', avatarSrc: 'https://www.placecage.com/102/101', role: 2},
  ],
}
import React, { PureComponent } from 'react';
import { SussolReactTable } from 'sussol-react-table';

const columns = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'code',
    title: 'Code',
  },
];

export class ResultsTable extends PureComponent {
  render() {
    return (
      <div>
        <h2>Results for {this.props.searchTerm}</h2>
        <SussolReactTable
          columns={columns}
          tableData={this.props.data}
        />
      </div>
    );
  }
}
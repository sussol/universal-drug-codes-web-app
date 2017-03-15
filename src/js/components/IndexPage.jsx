import React, { PureComponent } from 'react';

import { ResultsTable } from './ResultsTable.jsx';
import { SearchBar } from './SearchBar.jsx';

export class IndexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showResults: false };
  }

  // respond to search input
  handleSearchChange(data, searchTerm) {
    if (!data || !data.length) return this.setState({ showResults: false });
    return this.setState({ showResults: true, resultData: data, searchTerm });
  }

  render(props) {
    return (
      <div>
        <SearchBar
          onSearchChange={(data, searchTerm) => (
            this.handleSearchChange(data, searchTerm)
          )}
          onSearchClear={() => this.handleSearchChange(null)}
        />
        {/* render results table */}
        {this.state.showResults && <ResultsTable
          {...props}
          data={this.state.resultData}
          searchTerm={this.state.searchTerm}
        />}
      </div>
    );
  }
}
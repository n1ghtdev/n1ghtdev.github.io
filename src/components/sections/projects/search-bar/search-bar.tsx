import React from 'react';

import * as styles from './search-bar.styles';

type Props = {
  query: any;
  onChangeQuery: any;
};

function SearchBar({ query, onChangeQuery }: Props) {
  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChangeQuery(e.target.value);
  }

  return (
    <styles.Form>
      <styles.Input
        value={query}
        placeholder="Search for project..."
        onChange={handleQueryChange}
      />
    </styles.Form>
  );
}

export default SearchBar;

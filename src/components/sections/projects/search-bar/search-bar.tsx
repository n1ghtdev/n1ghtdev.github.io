import React from 'react';

import * as styles from './search-bar.styles';

type Props = {
  value: string;
  onChange: any;
};

function SearchBar(props: Props) {
  return (
    <styles.Form>
      <styles.Input
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onChange(e.target.value)
        }
      />
    </styles.Form>
  );
}

export default SearchBar;

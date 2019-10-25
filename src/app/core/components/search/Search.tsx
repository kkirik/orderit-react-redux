import React from 'react';
import { bind } from 'lodash-decorators';

import { FlexBox, FlexItem } from '../../css-in-js/blocks';
import { Input, SearchButton } from '../../css-in-js/search';
import searchIcon from '../../../../public/icons/search-icon.png';

type SubmitType = React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>;

interface IProps {
  force?: boolean;
  onChange: (searchString: string) => void;
}

interface IState {
  search: string;
}

export class Search extends React.Component<IProps, IState> {
  state: Readonly<IState> = {
    search: '',
  };

  componentDidMount() {
    const searchString = localStorage.getItem('SEARCH') || '';
    this.setState({ search: searchString });
  }

  @bind
  handleChange(e: SubmitType, submit?: boolean) {
    e.preventDefault();
    const { force, onChange } = this.props;
    const { value } = e.target as HTMLInputElement;

    this.setState(
      ({ search }) => {
        return { search: submit ? search : value };
      },
      () => {
        if (submit || force) {
          const { search } = this.state;

          if (localStorage.getItem('SEARCH') !== search) {
            localStorage.setItem('SEARCH', search);
            onChange(search);
          }
        }
      },
    );
  }

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={(e) => this.handleChange(e, true)}>
        <FlexBox width="99%" height="30px" padding="10px">
          <FlexItem width="90%">
            <Input type="text" value={search} onChange={this.handleChange} />
          </FlexItem>
          <FlexItem width="10%">
            <SearchButton type="submit">
              <img src={searchIcon} alt="search" width="30px" height="30px" color="red" />
            </SearchButton>
          </FlexItem>
        </FlexBox>
      </form>
    );
  }
}

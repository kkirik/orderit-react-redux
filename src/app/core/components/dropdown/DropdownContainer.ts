import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

import { setActiveElementMenu, setStateOpenMenu } from './DropdownAction';
import Dropdown, { IItem } from './Dropdown';
import { IRootState } from '../../reducers/reducer';

interface IDispatchProps {
  setActiveElement: (element: IItem) => void;
  setOpenMenu: (state: boolean) => void;
}

interface IDropdownProps {
  items: IItem[];
}

interface IStateProps {
  activeElement: IItem;
  openMenu: boolean;
}

export type IProps = IStateProps & IDropdownProps & IDispatchProps;

const mapStateToProps = (state: IRootState, ownProps: IDropdownProps): IStateProps => {
  const { openMenu, activeElement: currentActiveElement } = state.dropdown;
  const defaultActiveElement = find(ownProps.items, ['active', true]);
  const activeElement = isEmpty(currentActiveElement) ? defaultActiveElement : currentActiveElement;

  return {
    activeElement,
    openMenu,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
  setActiveElement: (element) => dispatch(setActiveElementMenu(element)),
  setOpenMenu: (state) => dispatch(setStateOpenMenu(state)),
});

export default connect<IStateProps, IDispatchProps, IDropdownProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);

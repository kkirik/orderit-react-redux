import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

import { setActiveElementMenu, setStateOpenMenu } from './DropdownAction';
import Dropdown, { IItem, IDropdownProps } from './Dropdown';

const mapStateToProps = (state: any, ownProps: IDropdownProps) => {
  const { openMenu, activeElement: currentActiveElement } = state.dropdown;
  const defaultActiveElement = find(ownProps.items, ['active', true]);
  const activeElement = isEmpty(currentActiveElement) ? defaultActiveElement : currentActiveElement;

  return {
    activeElement,
    openMenu,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveElement: (element: IItem) => dispatch(setActiveElementMenu(element)),
  setOpenMenu: (state: boolean) => dispatch(setStateOpenMenu(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);

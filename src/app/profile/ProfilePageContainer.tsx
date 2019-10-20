import { connect } from 'react-redux';

import { ProfilePage } from './ProfilePage';
import { IRootState, ThunkResult } from '../core/reducers/reducer';
import Profile from '../core/models/Profile';
import { getProfile } from './ProfileAction';

interface IStateToProps {
  profile: Profile;
}

const mapStateToProps = (state: IRootState): IStateToProps => ({
  profile: state.profile,
});

interface IDispatchToProps {
  getProfile: () => Promise<void>;
}

// eslint-disable-next-line react-redux/mapDispatchToProps-prefer-shorthand
const mapDispatchToProps = (dispatch: ThunkResult): IDispatchToProps => ({
  getProfile: () => dispatch(getProfile()),
});

export type ProfileProps = IStateToProps & IDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);

import Profile from '../core/models/Profile';
import { LOAD_PROFILE, LOAD_ORDERS } from '../core/constants';
import { setLoader, unsetLoader } from '../core/components/spinner/SpinnerAction';
import { ThunkResult } from '../core/reducers/reducer';

export interface ISetProfileAction {
  type: typeof LOAD_PROFILE;
  profile: Profile;
}

export function setProfile(profile: Profile): ISetProfileAction {
  return {
    profile,
    type: LOAD_PROFILE,
  };
}

export function getProfile() {
  return async (dispatch: ThunkResult) => {
    dispatch(setLoader(LOAD_ORDERS));

    try {
      const res = await fetch(`/api/users/1`);
      const data: Profile = await res.json();
      const profile = new Profile(data);

      dispatch(setProfile(profile));
    } finally {
      dispatch(unsetLoader(LOAD_ORDERS));
    }
  };
}

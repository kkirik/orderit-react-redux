import { ISetProfileAction } from './ProfileAction';
import Profile from '../core/models/Profile';

function reducer(state = new Profile(), action: ISetProfileAction) {
  if (action.type === 'LOAD_PROFILE') {
    return action.profile;
  }

  return state;
}

export default reducer;

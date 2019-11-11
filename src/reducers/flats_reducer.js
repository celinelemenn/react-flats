import flats from '../../data/flats';

export default function(state = flats, action) {
  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
}

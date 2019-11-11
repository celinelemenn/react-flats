import flats from '../../data/flats';

export function setFlats() {
  return {
    type: 'SET_FLATS',
    payload: flats
  };
}

export function setSelectedFlat(flat) {
  return {
    type: 'SET_SELECTED_FLAT',
    payload: flat
  };
}

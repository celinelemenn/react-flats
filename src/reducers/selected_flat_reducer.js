// const init = { };

const init = null;

export default function(state = init, action) {
  switch (action.type) {
    case 'SET_SELECTED_FLAT':
      return action.payload;
    default:
      return state;
  }
}

// const flatReducer = (state = init, action) => {
//   switch (action.type) {
//     case 'SELECTED_FLAT':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default flatReducer;

const defaultState = {
  timesClicked: 0,
};

export default (state = defaultState, action) => {
  switch (action) {
    case 'increase':
      console.log('Clikced');
      state.timesClicked = state.timesClicked++;
      break;
    default:
      return state;
      console.log(action);
  }
  return state;
};

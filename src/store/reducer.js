const defaultState = {
  focused: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'search_focus':
      return Object.assign({}, state, { focused: true });
    case 'search_blur':
      return Object.assign({}, state, { focused: false });
    default:
      return state;
  }
}

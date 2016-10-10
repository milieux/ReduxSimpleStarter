// all reducers always accepts 2 params: the current state and action
// only ever called when there is an action
// State argument is NOT application state, only the state this
// reducer is responsible for
// Redux doesn't allow returning state as undefined
//
// there are some default actions that are set up by redux that runs under the hood when booted up
export default function(state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload
  }

  return state;
}

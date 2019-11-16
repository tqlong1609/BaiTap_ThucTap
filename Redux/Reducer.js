const initState = {value: []};

const reducer = (state = initState, action) => {
  const newState = {...state};
  if (action.type === 'loadDataUrlSync') {
      newState.value = action.value;
  }
  return newState;
};

export default reducer;

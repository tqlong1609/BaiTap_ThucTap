const initState = {arrData: [], arrTemp: []};
const reducer = (state = initState, action) => {
  const newState = {...state};

  if (action.type === 'LoadDataAsync') {
    newState.arrData = action.value;
  }
  if (action.type === 'sendIndex') {
    const newArrTemp = [...newState.arrTemp];
    newArrTemp.push(action.value);
    newState.arrTemp = newArrTemp;
  }

  return newState;
};
export default reducer;

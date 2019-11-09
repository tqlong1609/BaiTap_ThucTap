const initState = {arrData: [], arrTemp: {}};
const reducer = (state = initState, action) => {
  const newState = {...state};

  if (action.type === 'LoadDataAsync') {
    newState.arrData = action.value;
  }
  if (action.type === 'sendIndex') {
    const newArrTemp = {...newState.arrTemp};
    newArrTemp[action.value.index] = !newArrTemp[action.value.index];
    newState.arrTemp = newArrTemp;
    console.log(newArrTemp);
  }

  return newState;
};
export default reducer;

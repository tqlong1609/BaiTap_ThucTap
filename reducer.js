
const initState = {valueDragon: 0, valueKnight1: 0, valueKnight2: 0};

const Reducer = (state = initState,action) => {
    const newState = {...state};
    if(action.type === 'addDragon'){
        newState.valueDragon += 1;
        newState.valueKnight1 += 1;
        newState.valueKnight2 += 1;
    }
    if (action.type === 'addValueKnight1') {
      newState.valueKnight1 += 1;
    }
    if (action.type === 'addValueKnight2') {
      newState.valueKnight2 += 1;
    }
    return newState;
}

export default Reducer;
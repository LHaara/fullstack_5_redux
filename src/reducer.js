const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  //console.log(state)
  switch (action.type) {
    case 'GOOD':      
      //return Object.assign({}, state, {good: state.good+1})
      return {...state, good: state.good+1 }
    case 'OK':
      return {...state, ok: state.ok +1}
    case 'BAD':
      return {...state, bad: state.bad +1}
    case 'ZERO':
      return {...state, good: 0, ok: 0, bad: 0}
    default:
      return state
  }
}

export default counterReducer
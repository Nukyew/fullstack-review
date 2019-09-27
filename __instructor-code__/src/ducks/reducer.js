// INITIAL STATE
const initalState = {
  loggedIn: false,
  user: null
}

// ACTION CONSTS
const UPDATE_USER = 'UPDATE_USER'

// ACTION BUILDERS
export const updateUser = (userObj) => {
  return {
    type: UPDATE_USER,
    payload: userObj
  }
}

// REDUCER FUNCTION
const reducer = (state = initalState, action) => {
  switch(action.type) {
    case UPDATE_USER:
      return {...state, user: action.payload}
    default: return state
  }
}

export default reducer
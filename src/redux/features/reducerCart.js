const initialState = {
  carts: []
}

export const cartsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'cars/postCart/fulfilled':
      return {
        ...state,
        carts: {
          user: localStorage.getItem("token"),
          auto: action.payload
        }
      }
    default:
      return state
  }
}

export const postCart = (auto) => {
  return async (dispatch) => {
    let optionPostCart = {
      method: 'POST',
      body: JSON.stringify({ auto: auto }),
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer" + localStorage.getItem("token")
      },
    }

    try{
      await fetch("http://localhost:4000/cartToken", {
        method: 'POST',
        body: JSON.stringify({ auto: auto }),
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
      })

      dispatch({ type: 'cars/postCart/fulfilled', payload: auto})
    } catch (e) {
      console.log(e)
    }
  }
}
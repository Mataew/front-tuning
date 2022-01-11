const initialState = {
  carts: {},
};

export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cars/postCart/fulfilled":
      return {
        ...state,
        carts: {
          user: localStorage.getItem("token"),
          auto: action.payload,
        },
      };
      case 'cart/chooseService/fulfilled':
        return {
          ...state,
          carts: {
            ...state.carts, 
            service: action.payload
          }
        }
      case "cart/postCart/fullfilled":
        return {
          ...state,
          carts: {
            ...state.carts,
            masters: action.payload
          }
        }
    default:
      return state;
  }
};

export const chooseAuto = (auto) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "cars/postCart/fulfilled", payload: auto });
      console.log(auto)
    } catch (e) {
      console.log(e);
    }
  };
};


export const chooseService = (serviceId) => {
  return async (dispatch) => {
    try {
      dispatch({type: 'cart/chooseService/fulfilled', payload: serviceId})
      console.log(serviceId)
    } catch (e) {
      console.log(e);
    }
  };
};

export const postCart = (masters) => {
  return async (dispatch) => {
    try {
      await fetch("http://localhost:4000/cartToken", {
        method: "POST",
        body: JSON.stringify({ masters: masters }),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch({ type: "cart/postCart/fullfilled", payload: masters})
    } catch (e) {
      console.log(e)
    }
  }
}

const initialState = {
  carts: [],
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
      case 'cart/patchService/fulfilled':
        return {
          ...state,
          carts: [...state.carts, {
            service: action.payload
          }]
        }
    default:
      return state;
  }
};

export const postCart = (auto) => {
  return async (dispatch) => {
    let optionPostCart = {
      method: "POST",
      body: JSON.stringify({ auto: auto }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    };

    try {
      await fetch("http://localhost:4000/cartToken", {
        method: "POST",
        body: JSON.stringify({ auto: auto }),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      dispatch({ type: "cars/postCart/fulfilled", payload: auto });
    } catch (e) {
      console.log(e);
    }
  };
};

export const chooseService = (serviceId, cartId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:4000/cart/${cartId}`, {
        method: 'PATCH',
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({service: serviceId})
      });
      dispatch({type: 'cart/patchService/fulfilled', payload: serviceId})
      console.log(serviceId);
    } catch (e) {
      console.log(e);
    }
  };
};

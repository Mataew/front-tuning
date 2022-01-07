const initialStateSign = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token")
};

export default function application(state = initialStateSign, action) {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "application/signup/fulfiled":
      return {
        ...state,
        signingUp: false,
      };
    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
      case "application/signin/pending":
        return {
          ...state,
          signingIn: true,
          error: null,
        };
      case "application/signin/fulfiled":
        return {
          ...state,
          signingIn: false,
          token: action.payload.token
        };
      case "application/signin/rejected":
        return {
          ...state,
          signingIn: false,
          error: action.error,
        };
      
    default:
      return state;
  }
}

export const createUser = (login, password, /*firstName*/) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const responce = await fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify({ login, password, /*firstName*/ }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await responce.json();

    if (json.error) {
      dispatch({ type: "application/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signup/fulfiled", payload: json });
    }
  };
};

export const auth = (login, password) => {
  return async dispatch => {
    dispatch({ type: "application/signin/pending" });

    const responce = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await responce.json();

    if (json.error) {
      dispatch({ type: "application/signin/rejected", error: json.e.message });
    } else {
      dispatch({ type: "application/signin/fulfiled", payload: json });
      localStorage.setItem("token", json.token)
    }
  }
}

const initialStateSign = {
    signingUp: false,
    error: null,

}

export default function application(state = initialStateSign, action) {
    switch(action.type) {
        default:
            return state
    } 
}

export const createUser = (login, password) => {
    return async dispatch => {
        dispatch({type: "application/signup/pending"})

        const responce = await fetch("http://localhost:4000/users", {
            method: "POST",
            body: JSON.stringify({login, password}),
            headers: {
                "Content-type": "application/json"
            }
        })

        const json = await responce.json()

        if(json.error) {
            dispatch({type: "application/signup/rejected", error: json.error})
        } else {
            dispatch({type: "application/signup/fulfiled", payload: json})
        }
    } 
}
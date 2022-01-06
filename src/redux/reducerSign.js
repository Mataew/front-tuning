const initialStateSign = {
    signingUp: false,
    error: null,
    token: null,
    
}

export default function application(state = initialStateSign, action) {
    switch(action.type) {
        default:
            return state
    } 
}
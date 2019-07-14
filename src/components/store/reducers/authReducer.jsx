
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('login successed');
            return {
                ...state,
                authError: null
            }
        default:
            return state;
    }

}

export default authReducer
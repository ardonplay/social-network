const LOADING = "loading"

let initialState = {
    isLoading: false
}


const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state, isLoading: action.loading
            }
        }
        default:
            return state;
    }
}


export const setLoadingActionCreator = (loading) => ({ type: LOADING, loading: loading })

export default loadingReducer;
export const GET_CAT = "GET_CAT";
const SET_CAT = "SET_CAT";

// ACTIONS
export const getCat = () => ({
    type: GET_CAT
});

export const setCat = (cat) => ({
    type: SET_CAT,
    cat
})

const initialState = {
    cat: undefined
}

// REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CAT:
            const { cat } = action;
            return {...state, cat }
        default:
            return state;
    }
}
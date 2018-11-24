const history = (state, action) => {
    return {
        id: action.id,
        text: action.text,
        url: action.url
    }
}
const historys = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HISTORY':
            return [
                ...state,
                history(undefined, action)
            ]
        default:
            return state
    }
}
export default historys 
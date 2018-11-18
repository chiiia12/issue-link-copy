const todo = (state, action) => {
    return {
        id: action.id,
        text: action.text
    }
}
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
    }
}
export default todos
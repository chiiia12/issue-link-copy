let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}
export const addHistory = (text,url)=>{
    return {
        type: 'ADD_HISTORY',
        id: nextTodoId++,
        text,
        url
    }
}
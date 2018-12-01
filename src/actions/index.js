let nextTodoId = 0
export const addHistory = (text, url) => {
    return {
        type: 'ADD_HISTORY',
        id: nextTodoId++,
        text,
        url
    }
}
export const copyUrl = (url)=>{

}
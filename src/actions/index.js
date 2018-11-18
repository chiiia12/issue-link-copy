import axios from 'axios';

let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}
export const searchIssue = (text)=>{
    return (dispatch) => {
        // return axios.get(`https://github.com/users/chiiia12/contributions`)
        // return axios.get(`https://api.github.com/users/chiiia12`)
        return axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                dispatch(addInfo(res.data[0]))
            })
            .catch(err => {
                dispatch(getRequestFailure(err))
            })
    }
}
export const getRequestFailure = (err) => {
    console.log("getRequestFailure")
    return {
        type: 'GET_REQUEST_FAILURE',
        err
    }
}
export const addInfo = (data) => {
    console.log("addInfo")
    return {
        type: 'ADD_TODO',
        id:nextTodoId++,
        text:data.title,
    }
}
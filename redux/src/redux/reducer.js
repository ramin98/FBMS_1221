let initialState = {
    usersArray: [],
    addingInfo: ''
}

function reducer(state = initialState, action){

    if(action.type === 'GET DATA'){
        return {...state, usersArray: action.payload}
    }
   else if(action.type === 'ADD'){
        let newArr = [...state.usersArray]
        newArr = [...newArr, action.payload]
        return {...state, usersArray: newArr}
    }
    else if(action.type === 'ADDING INFO'){
        return {...state, addingInfo: action.payload}
    }
    return state
}

export default reducer
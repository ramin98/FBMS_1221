import { addingData, deletingData, addBagData } from "./reducer"

export function fetchAddData(obj){
    return function(dispatch){
        fetch('http://localhost:5000/add-admin', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(res => res.text())
        .then(data => dispatch(addingData(data)))
    }
}

export function fetchAddBagData(obj){
    return function(dispatch){
        fetch('http://localhost:5000/add-admin', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(res => res.text())
        .then(data => dispatch(addingData(data)))
    }
}

export function fetchDeleteData(id){
    return function(dispatch){
        fetch('http://localhost:5000/delete-admin/' + id, {
            method:'DELETE',
        })
        .then(res => res.text())
        .then(data => dispatch(deletingData(data)))
    }
}
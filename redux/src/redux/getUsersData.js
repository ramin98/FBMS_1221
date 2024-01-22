export function getData(){
    return function(dispatch){
        fetch('http://localhost:5000/goods')
        .then(res => res.json())
        .then(data => dispatch({type:'GET DATA', payload: data}))
    }
}


export function addData(obj){
    return function(dispatch){
        fetch('http://localhost:5000/add-admin', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(res => res.text())
        .then(data => dispatch({type:'ADDING INFO', payload: data}))
    }
}
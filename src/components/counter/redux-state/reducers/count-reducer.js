const initialState = {
    count:1234
}

const reducer = (prevState = initialState, action) =>{

    switch (action.type){
        case "UP":
            return{
                count: prevState.count+1
            }
        case "DOWN":
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

export default reducer

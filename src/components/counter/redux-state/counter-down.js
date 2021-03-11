import React from 'react'
import {connect} from "react-redux"

const CounterDown = ({DOWN}) =>
    <button onClick={DOWN}> DOWN </button>

const stateToProperty = (state) => {}

const propertyToDispatcher = (dispatch) =>{
    return {

        DOWN: () =>{
            dispatch({
                type:"DOWN"
            })
        }
    }

}
export default connect(stateToProperty,propertyToDispatcher)(CounterDown)
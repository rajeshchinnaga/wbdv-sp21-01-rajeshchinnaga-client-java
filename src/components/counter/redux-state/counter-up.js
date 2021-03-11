import React from 'react'
import {connect} from "react-redux"

const CounterUp = ({UP}) =>
    <button onClick={UP}> UP </button>

const stateToProperty = (state) => {}

const propertyToDispatcher = (dispatch) =>{
    return {

        UP: () =>{
            dispatch({
                type:"UP"
            })
        }
    }

}
export default connect(stateToProperty,propertyToDispatcher)(CounterUp)
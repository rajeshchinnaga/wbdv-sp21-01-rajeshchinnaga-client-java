import React from 'react'
import {connect} from "react-redux"

const CounterDisplay = ({theCount}) =>
    <h1>Counter:{theCount}</h1>

const stateToProperty = (state) =>{
    return{

        theCount: state.count
    }
}
export default connect(stateToProperty) (CounterDisplay)

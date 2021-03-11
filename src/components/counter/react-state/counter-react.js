import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";
export default class CounterUsingReact extends React.Component{
    state = {
        count: 123
    }
    up = () =>{
        this.setState((prevState) =>{
                return{
                    count: prevState.count+1
                }
            })
    }
    down = () =>{
        this.setState((prevState) =>{
                return{
                    count: prevState.count-1
                }
            }
        )
    }
    render() {
        return(
            <div>
                <CounterDisplay count={this.state.count}/>
                <CounterDown down={this.down}/>
                <CounterUp up={this.up}/>

            </div>
        )
    }
}

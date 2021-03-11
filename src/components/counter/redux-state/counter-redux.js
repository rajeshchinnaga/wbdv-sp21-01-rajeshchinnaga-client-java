import React from 'react'
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/count-reducer";

const store = createStore(reducer)

export default class CounterUsingRedux extends React.Component{

    render() {
        return(
            <Provider store={store}>

                <div>
                    <CounterDisplay/>
                    <CounterDown/>
                    <CounterUp/>
                </div>

            </Provider>

        )
    }
}
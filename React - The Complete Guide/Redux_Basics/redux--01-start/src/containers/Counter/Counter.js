import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  //   state = {
  //     counter: 0,
  //   };

  //   counterChangedHandler = (action, value) => {
  //     switch (action) {
  //       case "inc":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter + 1 };
  //         });
  //         break;
  //       case "dec":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter - 1 };
  //         });
  //         break;
  //       case "add":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter + value };
  //         });
  //         break;
  //       case "sub":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter - value };
  //         });
  //         break;
  //     }
  //   };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Results
        </button>
        <ul>
          {this.props.storedResults.map((storedResult) => (
            <li
              onClick={() => this.props.onDeleteResult(storedResult.id)}
              key={storedResult.id}
            >
              {storedResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionType.ADD, value: 10 }),
    onSubtractCounter: () =>
      dispatch({ type: actionType.SUBSTRACT, value: 15 }),
    onStoreResult: (result) =>
      dispatch({ type: actionType.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionType.DELETE_RESULT, resultElementId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

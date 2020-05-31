import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionType from "../store/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    onAddPerson: (name, age) =>
      dispatch({
        type: actionType.ADD_PERSON,
        personData: { personName: name, personAge: age },
      }),
    onDeletePerson: (deletedPersonId) =>
      dispatch({
        type: actionType.DELETE_PERSON,
        deletedPersonId: deletedPersonId,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

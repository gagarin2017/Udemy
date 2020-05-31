import * as actionTypes from "../actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_PERSON: {
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: "JurOK",
        age: Math.floor(Math.random() * 40),
      };

      const newState = Object.assign({}, state);
      newState.persons = state.persons.concat(newPerson);
      return newState;
    }

    case actionTypes.DELETE_PERSON: {
      const updatedPersons = [...state.persons];

      const newPersonList = updatedPersons.filter((person) => person.id !== action.deletedPersonId);

      console.log(newPersonList);

      const updatedState = {
        ...state,
        persons: newPersonList,
      };

      console.log(updatedState);
      return updatedState;
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;

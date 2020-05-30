import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
};

const qMicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.REGISTER: {
      console.log(action);
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }
    case ACTIONS.Types.LOGIN: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item};
      let newState = _.cloneDeep(state);  
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.CREATE_MEETING: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
    }

    case ACTIONS.Types.END_MEETING: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    
    default:
      return state;
  }
};

export default qMicReducer;

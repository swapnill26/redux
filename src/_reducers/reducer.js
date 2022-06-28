const initialState = {
  counter: 1,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("action", action.payload);
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      //   console.log(state);
      return state;
  }
};

export default reducer;

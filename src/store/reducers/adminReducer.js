const initState = {};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADMIN_SUCCESS":
      console.log("admin success");
      return state;
    case "ADMIN_ERROR":
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default adminReducer;

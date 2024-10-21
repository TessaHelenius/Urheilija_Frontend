const UrheilijaReducer = (state, action) => {
  switch (action.type) {
    case "GET_URHEILIJAT":
      return {
        ...state,
        urheilijat: action.payload,
      };
    case "GET_URHEILIJA":
      return {
        ...state,
        urheilija: action.payload,
      };
    case "ADD_URHEILIJA":
      return {
        ...state,
        urheilijat: [...state.urheilijat, action.payload],
      };
    case "UPDATE_URHEILIJA":
      return {
        ...state,
        urheilijat: state.urheilijat.map((urheilija) =>
          urheilija.id === action.payload.id ? action.payload : urheilija
        ),
      };
    case "DELETE_URHEILIJA":
      return {
        ...state,
        urheilijat: state.urheilijat.filter(
          (urheilija) => urheilija.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default UrheilijaReducer;

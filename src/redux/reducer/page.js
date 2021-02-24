import { actionTypes } from "../actionTypes";
import { studentData } from "../../studentData";

export const currentPage = (state = { page: 1, startPage: 1 }, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE: {
      return { ...state, page: action.payload.page };
    }
    case actionTypes.SET_PRE_PAGE: {
      return handlePrePage(state);
    }
    case actionTypes.SET_NEXT_PAGE: {
      return handleNextPage(state);
    }
    default:
      return state;
  }
};
const handlePrePage = (currentState) => {
  if (currentState.startPage > 1) {
    return {
      ...currentState,
      startPage: currentState.startPage - 1,
    };
  } else {
    return { ...currentState, startPage: 1 };
  }
};
const handleNextPage = (currentState) => {
  if (currentState.startPage < Math.ceil(studentData.length / 5) - 2) {
    return {
      ...currentState,
      startPage: currentState.startPage + 1,
    };
  } else {
    return {
      ...currentState,
      startPage: Math.floor(studentData.length / 5) - 2,
    };
  }
};

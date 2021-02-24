import { actionTypes } from "./actionTypes";

export const changeStudentInputValue = (studentInfo) => {
  return {
    type: actionTypes.CHANGE_INPUT,
    payload: {
      studentInfo,
    },
  };
};
export const findStudent = () => {
  return {
    type: actionTypes.SEARCH,
    payload: {},
  };
};
export const changePage = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    payload: { page },
  };
};
export const setPrePage = () => {
  return {
    type: actionTypes.SET_PRE_PAGE,
    payload: {},
  };
};
export const setNextPage = () => {
  return {
    type: actionTypes.SET_NEXT_PAGE,
    payload: {},
  };
};

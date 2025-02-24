import { createReducer, on } from "@ngrx/store";
import { initialState } from "../app-state";
import * as stateAction from "../actions/case-actions";

const _caseReducer = createReducer(
  initialState,
  on(stateAction.addCase, (state, { payload }) => ({
    ...state,
    cases: [...state.cases, ...payload],
  })),
  on(stateAction.removeCase, (state, { id }) => ({
    ...state,
    cases: removeItem(state, id),
  })),
  // api
  on(stateAction.loadCasesSuccess, (state, { payload }) => ({
    ...state,
    cases: payload,
  })),
  on(stateAction.loadCasesFailure, (state, { error }) => ({
    ...state,
    cases: error,
  }))
);

function removeItem(state: any, id: string) {
  let array = [...state.cases];
  const payload = array.filter((storageItem) => storageItem.id === id)[0];
  const index = array.indexOf(payload);
  if (index !== -1) {
    array.splice(index, 1);
    return array;
  } else {
    throw new Error('Id not found, item cannot be deleted');
  }
}

export function caseReducer(state = initialState, action) {
  return _caseReducer(state, action);
}

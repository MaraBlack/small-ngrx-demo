import { createReducer, on } from "@ngrx/store";
import { initialState } from "../app-state";
import * as stateAction from "../actions/cpu-actions";

const _cpuReducer = createReducer(
  initialState,
  on(stateAction.addCpu, (state, { payload }) => ({
    ...state,
    cpus: [...state.cpus, ...payload],
  })),
  on(stateAction.removeCpu, (state, { id }) => ({
    ...state,
    cpus: removeItem(state, id),
  })),
  // api
  on(stateAction.loadCpusSuccess, (state, { payload }) => ({
    ...state,
    cpus: payload,
  })),
  on(stateAction.loadCpusFailure, (state, { error }) => ({
    ...state,
    cpus: error,
  }))
);

function removeItem(state: any, id: string) {
  var array = [...state.cpus];
  const payload = array.filter((storageItem) => storageItem.id === id)[0];
  var index = array.indexOf(payload);
  if (index !== -1) {
    array.splice(index, 1);
    return array;
  } else {
    return array;
  }
}

export function cpuReducer(state, action) {
  return _cpuReducer(state, action);
}

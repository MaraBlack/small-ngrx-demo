import { createReducer, on } from "@ngrx/store";
import { initialState } from "../app-state";
import * as stateAction from "../actions/storage-actions";

const _storageReducer = createReducer(
  initialState,
  on(stateAction.addStorage, (state, { payload }) => ({
    ...state,
    storages: [...state.storages, ...payload],
  })),
  on(stateAction.removeStorage, (state, { id }) => ({
    ...state,
    storages: removeItem(state, id),
  })),
  // api
  on(stateAction.loadStoragesSuccess, (state, { payload }) => ({
    ...state,
    storages: payload,
  })),
  on(stateAction.loadStoragesFailure, (state, { error }) => ({
    ...state,
    storages: error,
  }))
);

function removeItem(state: any, id: string) {
  var array = [...state.storages];
  const payload = array.filter((storageItem) => storageItem.id === id)[0];
  var index = array.indexOf(payload);
  if (index !== -1) {
    array.splice(index, 1);
    return array;
  } else {
    return array;
  }
}

export function storageReducer(state, action) {
  return _storageReducer(state, action);
}

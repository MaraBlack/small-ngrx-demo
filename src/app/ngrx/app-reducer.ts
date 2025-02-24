import { cpuReducer } from "./reducers/cpu-reducer";
import { caseReducer } from "./reducers/case-reducer";
import { storageReducer } from "./reducers/storage-reducer";
import { combineReducers } from "@ngrx/store";

export const _appReducer = {
  cpus: cpuReducer,
  cases: caseReducer,
  storages: storageReducer,
};

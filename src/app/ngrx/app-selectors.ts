import { createSelector } from "@ngrx/store";
import { AppState, initialState } from "./app-state";

export const getCpuState = (state: AppState) => state.cpus || initialState.cpus;
export const getCaseState = (state: AppState) =>
  state.cases || initialState.cases;
export const getStoragesState = (state: AppState) =>
  state.storages || initialState.storages;
export const getState = (state: AppState) => state || initialState;

// total-items.selectors.ts
export const selectTotalItems = createSelector(
  getCpuState,
  getCaseState,
  getStoragesState,
  (cpuItems: any, caseItems: any, storageItems: any) => {
    return cpuItems.cpus.length + caseItems.cases.length + storageItems.storages.length;
  }
);

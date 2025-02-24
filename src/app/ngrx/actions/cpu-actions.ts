import { createAction } from "@ngrx/store";
import { GridItem } from "../../models/grid-item.model";

enum CPUActions {
  // events
  CPU_PAGE_ADD = "[CPU Page] Add CPU",
  CPU_PAGE_REMOVE = "[CPU Page] Remove CPU",
  CPU_PAGE_LOAD = "[CPU Page] Load CPUs",
  // api
  CPU_API_LOAD_SUCESS = "[CPU API] Load CPUs Success",
  CPU_API_LOAD_FAIL = "[CPU API] Load CPUs Failure",
}

// event actions
export const addCpu = createAction(
  CPUActions.CPU_PAGE_ADD,
  (payload: GridItem[]) => ({ payload })
);
export const removeCpu = createAction(
  CPUActions.CPU_PAGE_REMOVE,
  (id: string) => ({ id })
);
export const loadCpus = createAction(CPUActions.CPU_PAGE_LOAD);

//api actions
export const loadCpusSuccess = createAction(
  CPUActions.CPU_API_LOAD_SUCESS,
  (payload: GridItem[]) => ({ payload })
);
export const loadCpusFailure = createAction(
  CPUActions.CPU_API_LOAD_FAIL,
  (error: any) => ({ error })
);

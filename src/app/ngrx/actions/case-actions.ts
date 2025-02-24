import { createAction } from "@ngrx/store";
import { GridItem } from "../../models/grid-item.model";

enum CaseActions {
  //events
  CASE_PAGE_ADD = "[Case Page] Add Case",
  CASE_PAGE_REMOVE = "[Case Page] Remove Case",
  CASE_PAGE_LOAD = "[Case Page] Load Cases",
  // api
  CASE_API_LOAD_SUCESS = "[Case API] Load Cases Success",
  CASE_API_LOAD_FAIL = "[Case API] Load Cases Failure",
}

// event actions
export const addCase = createAction(
  CaseActions.CASE_PAGE_ADD,
  (payload: GridItem[]) => ({ payload })
);
export const removeCase = createAction(
  CaseActions.CASE_PAGE_REMOVE,
  (id: string) => ({ id })
);
export const loadCases = createAction(CaseActions.CASE_PAGE_LOAD);

// api actions
export const loadCasesSuccess = createAction(
  CaseActions.CASE_API_LOAD_SUCESS,
  (payload: GridItem[]) => ({ payload })
);
export const loadCasesFailure = createAction(
  CaseActions.CASE_API_LOAD_FAIL,
  (error: any) => ({ error })
);

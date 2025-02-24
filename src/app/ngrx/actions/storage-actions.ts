import { createAction } from "@ngrx/store";
import { GridItem } from "../../models/grid-item.model";

enum StorageActions {
  //events
  STORAGE_PAGE_ADD = "[Storage Page] Add Storage",
  STORAGE_PAGE_REMOVE = "[Storage Page] Remove Storage",
  STORAGE_PAGE_LOAD = "[Storage Page] Load Storages",
  // api
  STORAGE_API_LOAD_SUCESS = "[Storage API] Load Storage Success",
  STORAGE_API_LOAD_FAIL = "[Storage API] Load Storage Failure",
}

// event actions
export const addStorage = createAction(
  StorageActions.STORAGE_PAGE_ADD,
  (payload: GridItem[]) => ({ payload })
);
export const removeStorage = createAction(
  StorageActions.STORAGE_PAGE_REMOVE,
  (id: string) => ({ id })
);
export const loadStorages = createAction(StorageActions.STORAGE_PAGE_LOAD);

// api actions
export const loadStoragesSuccess = createAction(
  StorageActions.STORAGE_API_LOAD_SUCESS,
  (payload: GridItem[]) => ({ payload })
);
export const loadStoragesFailure = createAction(
  StorageActions.STORAGE_API_LOAD_FAIL,
  (error: any) => ({ error })
);

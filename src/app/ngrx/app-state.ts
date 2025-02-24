import { GridItem } from "../models/grid-item.model";

export interface AppState {
  cases: GridItem[];
  cpus: GridItem[];
  storages: GridItem[];
}

export const initialState: AppState = {
  cases: [],
  cpus: [],
  storages: [],
};

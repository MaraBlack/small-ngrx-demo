import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState, initialState } from "../ngrx/app-state";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import {
  getCaseState,
  getCpuState,
  getState,
  getStoragesState,
} from "../ngrx/app-selectors";
import { GridItem } from "../models/grid-item.model";

import * as caseStateAction from "../ngrx/actions/case-actions";
import * as cpuStateAction from "../ngrx/actions/cpu-actions";
import * as storageStateAction from "../ngrx/actions/storage-actions";

@Injectable({
  providedIn: "root",
})
export class StateService {
  public cases$: Observable<GridItem[]>;
  public cpus$: Observable<GridItem[]>;
  public storages$: Observable<GridItem[]>;

  private _combinedData = new BehaviorSubject<AppState>(initialState);
  public combinedData$ = this._combinedData.asObservable()

  constructor(private store: Store<AppState>) {
    this.cases$ = this.store.pipe(select(getCaseState));
    this.cpus$ = this.store.pipe(select(getCpuState));
    this.storages$ = this.store.pipe(select(getStoragesState));
  }

  // cases functions
  public addCase(item: GridItem[]) {
    this.store.dispatch(caseStateAction.addCase(item));
  }
  public removeCase(id: string) {
    this.store.dispatch(caseStateAction.removeCase(id));
  }

  // cpu functions
  public addCpu(item: GridItem[]) {
    this.store.dispatch(cpuStateAction.addCpu(item));
  }
  public removeCpu(id: string) {
    this.store.dispatch(cpuStateAction.removeCpu(id));
  }

  // storage functions
  public addStorage(item: GridItem[]) {
    this.store.dispatch(storageStateAction.addStorage(item));
  }
  public removeStorage(id: string) {
    this.store.dispatch(storageStateAction.removeStorage(id));
  }

  getDataCombined() {
    const combinedData: AppState = {
      cases: [],
      cpus: [],
      storages: [],
    };

    combineLatest([this.cases$, this.cpus$, this.storages$])
      .pipe(
        map((data: any) => {
          return { data };
        })
      )
      .subscribe((combined) => {
        combinedData.cases = [...combined.data[0].cases];
        combinedData.cpus = [...combined.data[1].cpus];
        combinedData.storages = [...combined.data[2].storages];
      });

      this._combinedData.next(combinedData);
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AppState } from "src/app/ngrx/app-state";
import { StateService } from "src/app/services/state.service";

@Injectable({
  providedIn: "root",
})
export class SummaryService {
  total = new BehaviorSubject<number>(0);

  constructor(private stateService: StateService) {
    this.stateService.getDataCombined();

    this.stateService.combinedData$.subscribe((data: any) => {
      this.total.next(this.calculateTotalItems(data));
    });
  }

  private calculateTotalItems(data: AppState): number {
    return data?.cases?.length + data?.cpus?.length + data?.storages?.length;
  }
}

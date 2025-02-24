import { Component } from "@angular/core";
import { GridItem } from "src/app/models/grid-item.model";
import { GridItemsComponent } from "../../shared/grid-items/grid-items.component";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { addCase } from "src/app/ngrx/actions/case-actions";
import { allCases } from "./cases.data";
import { StateService } from "src/app/services/state.service";

@Component({
  selector: "app-cases",
  standalone: true,
  imports: [GridItemsComponent],
  templateUrl: "./cases.component.html",
})
export class CasesComponent {
  
  private _cases = allCases;
  cases$ = of(this._cases);

  constructor(private stateService: StateService) {}

  onCaseAdd(item: GridItem) {
    this.stateService.addCase([item]);
  }
}

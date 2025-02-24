import { Component } from "@angular/core";
import { GridItem } from "src/app/models/grid-item.model";
import { GridItemsComponent } from "../../shared/grid-items/grid-items.component";
import { of } from "rxjs";
import { allHardDrives, allSsds } from "./storages.data";
import { StateService } from "src/app/services/state.service";

@Component({
  selector: "app-storage",
  standalone: true,
  imports: [GridItemsComponent],
  templateUrl: "./storage.component.html",
})
export class StorageComponent {
  private _hardDrive: GridItem[] = allHardDrives;
  private _ssd: GridItem[] = allSsds;

  hardDrive$ = of(this._hardDrive);
  ssd$ = of(this._ssd);

  constructor(private stateService: StateService) {}

  onStorageAdd(item: GridItem) {
    this.stateService.addStorage([item]);
  }
}

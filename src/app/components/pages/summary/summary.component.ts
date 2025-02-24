import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnChanges, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/ngrx/app-state";
import { StateService } from "src/app/services/state.service";

import { AgGridAngular, AgGridModule } from "ag-grid-angular";
import {
  ClientSideRowModelModule,
  GridApi,
  type ColDef,
} from "ag-grid-community";
import { ImageRendererComponent } from "./renderers/image-renderer/image-renderer.component";
import { ActionsRendererComponent } from "./renderers/actions-renderer/actions-renderer.component";

@Component({
  selector: "app-summary",
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: "./summary.component.html",
  styleUrl: "./summary.component.scss",
})
export class SummaryComponent implements OnInit {
  combinedData: AppState = {
    cases: [],
    cpus: [],
    storages: [],
  };

  gridApi: GridApi<any>;
  rowData = [];
  colDefs: ColDef[] = [
    // { field: "id" },
    {
      field: "image",
      cellRenderer: ImageRendererComponent,
      maxWidth: 200,
      flex: 1,
      suppressSizeToFit: true,
      cellClass: "flex align-items-center",
    },
    {
      field: "name",
      minWidth: 900,
      flex: 1,
      suppressSizeToFit: true,
      cellClass: "flex align-items-center",
    },
    {
      field: "type",
      flex: 1,
      suppressSizeToFit: true,
      cellClass: "flex align-items-center",
    },
    {
      field: "actions",
      cellRenderer: ActionsRendererComponent,
      flex: 1,
      suppressSizeToFit: true,
      cellClass: "flex align-items-center",
    },
  ];

  totalItems: number = 0;

  constructor(
    private stateService: StateService,
    private ref: ChangeDetectorRef,
    private store: Store<AppState>
  ) {}

  allCases!: any;

  ngOnInit() {
    this.stateService.getDataCombined();

    this.stateService.combinedData$.subscribe((data: any) => {
      this.combinedData = data;
      this.rowData = this.flattenData(data);
    });
  }

  private flattenData(data: any) {
    const { cases, cpus, storages } = data;
    return [...cases, ...cpus, ...storages];
  }
}

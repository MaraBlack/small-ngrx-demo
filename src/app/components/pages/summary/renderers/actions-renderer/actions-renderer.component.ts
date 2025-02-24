import { Component, computed, signal } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import type { ICellRendererParams } from "ag-grid-community";
import { StateService } from "src/app/services/state.service";

@Component({
  selector: "app-actions-renderer",
  standalone: true,
  imports: [],
  templateUrl: "./actions-renderer.component.html",
  styleUrl: "./actions-renderer.component.scss",
})
export class ActionsRendererComponent implements ICellRendererAngularComp {
  private params: any;
  private isItemDeletedFromStore = false;

  constructor(private stateService: StateService) {}

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams) {
    return true;
  }

  onDelete() {
    this. isItemDeletedFromStore = false
    let selectedNode = this.params.node;
    let selectedData = selectedNode.data;

    this.handleRemove(selectedData);
    if (this.isItemDeletedFromStore)
      this.params.api.applyTransaction({ remove: [selectedData] });
  }

  private handleRemove(selectedData: any) {
    try {
      switch (selectedData.type) {
        case "cpu": {
          this.stateService.removeCpu(selectedData.id);
          break;
        }
        case "case": {
          this.stateService.removeCase(selectedData.id);
          break;
        }
        case "storage": {
          this.stateService.removeStorage(selectedData.id);
          break;
        }
        default:
          break;
      }
      this.isItemDeletedFromStore = true;
    } catch {
      throw new Error(`Id not found, ${selectedData.name} cannot be deleted`);
    }
  }
}

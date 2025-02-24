import { Component } from "@angular/core";
import { GridItem } from "../../../models/grid-item.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { GridItemsComponent } from "../../shared/grid-items/grid-items.component";
import { Observable, of } from "rxjs";
import { allCpus } from "./cpus.data";
import { StateService } from "src/app/services/state.service";

@Component({
  selector: "app-cpu",
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, GridItemsComponent],
  templateUrl: "./cpu.component.html",
})
export class CpuComponent {
  categories = [
    { label: "AMD", value: "amd" },
    { label: "Intel", value: "intel" },
    { label: "ABS", value: "abs" },
  ];
  selectedCategory: { label: string; value: string };

  private _cpus: GridItem[] = allCpus;
  filteredCpus$: Observable<GridItem[]> = of(this._cpus);

  constructor(private stateService: StateService) {}

  onCategoryChange() {
    if (this.selectedCategory == null) {
      this.filteredCpus$ = of(this._cpus);
    } else {
      this.filteredCpus$ = of(
        this._cpus.filter((cpu) => cpu.category === this.selectedCategory.value)
      );
    }
  }

  onCpuAdd(item: GridItem) {
    this.stateService.addCpu([item]);
  }
}

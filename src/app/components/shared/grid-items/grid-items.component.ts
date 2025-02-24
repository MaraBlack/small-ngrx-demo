import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { Observable } from "rxjs";
import { GridItem } from "src/app/models/grid-item.model";

@Component({
  selector: "app-grid-items",
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: "./grid-items.component.html",
  styleUrl: "./grid-items.component.scss",
})
export class GridItemsComponent {
  @Input() gridItems!: Observable<GridItem[]>;

  @Output() onItemSelectEvent: EventEmitter<GridItem> = new EventEmitter();

  onItemSelect(item: GridItem){   
    this.onItemSelectEvent.emit(item)
  }
}

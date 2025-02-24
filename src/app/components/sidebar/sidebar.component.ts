import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteExtended, routes } from "src/main";
import { RouterModule } from "@angular/router";
import { AppState } from "src/app/ngrx/app-state";
import { StateService } from "src/app/services/state.service";
import { selectTotalItems } from "src/app/ngrx/app-selectors";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent {
  menuItems: RouteExtended[] = routes.slice(0, -1);
  totalItems$: Observable<number>;

  constructor(private stateService: StateService, private store: Store) {
    this.totalItems$ = this.store.select(selectTotalItems);
  }

  ngOnInit() {}
}

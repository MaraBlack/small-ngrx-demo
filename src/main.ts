import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, Route, RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { RouterOutlet, Routes } from "@angular/router";
import { SidebarComponent } from "./app/components/sidebar/sidebar.component";
import { CpuComponent } from "./app/components/pages/cpu/cpu.component";
import { StorageComponent } from "./app/components/pages/storage/storage.component";
import { SummaryComponent } from "./app/components/pages/summary/summary.component";
import { HomeComponent } from "./app/components/pages/home/home.component";
import { CasesComponent } from "./app/components/pages/cases/cases.component";
import { HttpClientModule } from "@angular/common/http";
import { cpuReducer } from "./app/ngrx/reducers/cpu-reducer";
import { caseReducer } from "./app/ngrx/reducers/case-reducer";
import { storageReducer } from "./app/ngrx/reducers/storage-reducer";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { _appReducer } from "./app/ngrx/app-reducer";
import { CommonModule } from "@angular/common";

import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';

@Component({
  selector: "app-main",
  templateUrl: "./main.html",
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, CommonModule, RouterModule],
})
export class MainComponent {}

export interface RouteExtended extends Route {
  name: string;
  icon: string;
}

export const routes: RouteExtended[] = [
  {
    path: "home",
    component: HomeComponent,
    name: "Home",
    icon: "pi pi-home",
  },
  {
    path: "config/cpu",
    component: CpuComponent,
    name: "CPU",
    icon: "pi pi-microchip",
  },
  {
    path: "config/cases",
    component: CasesComponent,
    name: "Cases",
    icon: "pi pi-microchip",
  },
  {
    path: "config/storage",
    component: StorageComponent,
    name: "Storage",
    icon: "pi pi-microchip",
  },
  {
    path: "summary",
    component: SummaryComponent,
    name: "Summary",
    icon: "pi pi-shopping-cart",
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
    name: "",
    icon: "",
  },
];

ModuleRegistry.registerModules([AllCommunityModule]);
bootstrapApplication(MainComponent, {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes),
    provideStore(_appReducer),
    provideStoreDevtools()
    // provideEffects([CpuEffects, CaseEffects]),
  ],
}).catch((err) => console.error(err));

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
// import { CpuService } from './cpu.service';
import * as stateAction from "../actions/cpu-actions";

@Injectable()
export class CpuEffects {
  loadCpus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stateAction.addCpu),
      mergeMap(() => {
        return of(stateAction.loadCpusSuccess([{ id: 22 }]));
        //     this.cpuService.getAllCpus()
        //   .pipe(
        //     map(cpus => loadCpusSuccess({ cpus })),
        //     catchError(error => of(loadCpusFailure({ error })))
        //   ));
      })
    )
  );

  constructor(private actions$: Actions) // private cpuService: CpuService
  {}
}

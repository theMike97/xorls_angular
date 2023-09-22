import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { AppState } from "./state";
import { map, withLatestFrom } from "rxjs";
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable()
export class Effects {
    constructor(
        private actionStream: Actions,
        private store: Store<AppState>
        // inject services
    ) {}
}
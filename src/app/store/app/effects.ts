import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { AppState } from "./state";

@Injectable()
export class Effects {
    constructor(
        private actionStream: Actions,
        private store: Store<AppState>
        // inject services
    ) {}
}
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { CacheState } from "./state";

@Injectable()
export class Effects {
    constructor(
        private actionStream: Actions,
        private store: Store<CacheState>
        // inject services
    ) {}
}
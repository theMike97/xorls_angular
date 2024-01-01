import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { type AppState } from './state';
import { map, withLatestFrom } from 'rxjs';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable()
export class Effects {
    private readonly actionStream = inject(Actions);
    private readonly store = inject(Store<AppState>);
}

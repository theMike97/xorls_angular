import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { type CacheState } from './state';

@Injectable()
export class Effects {
    private readonly actionStream = inject(Actions);
    private readonly store = inject(Store<CacheState>);
}

import { createAction, props } from '@ngrx/store';

export const workspaceViewportHeight    = createAction('set app workspace viewport height', props<{ height: number }>());
export const workspaceViewportWidth     = createAction('set app workspace viewport width', props<{ width: number }>());
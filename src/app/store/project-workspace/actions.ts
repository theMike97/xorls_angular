import { createAction, props } from '@ngrx/store';
import { type Component } from 'src/app/models/components';

export const componentPanelSelectComponent = createAction('select a component from the component panel', props<{ component: Component }>());

/*  TODO: create action chain when user places panel-selected component in workspace (ghost -> false, map->workspaceSelectComponent)
    This allows the properties panel to be mutable for a selected component before it is placed and after it is placed */

export const workspaceViewportHeight = createAction('set app workspace viewport height', props<{ height: number }>());
export const workspaceViewportWidth = createAction('set app workspace viewport width', props<{ width: number }>());
export const workspaceSelectComponent = createAction('Select a component in the workspace', props<{ component: Component }>());
export const workspaceViewportHeightUpdated     = createAction('workspace viewport height update detected', props<{ height: number }>());
export const workspaceViewportWidthUpdated      = createAction('workspace viewport width update detected', props<{ width: number }>());
export const workspaceCanvasHeight              = createAction('update diagram workspace canvas height', props<{ height: number }>());
export const workspaceCanvasWidth               = createAction('update diagram workspace canvas width', props<{ width: number }>());

export const redraw                             = createAction('call redraw in drawing service');

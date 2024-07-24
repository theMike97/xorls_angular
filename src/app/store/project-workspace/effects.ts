import { Inject, Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { type ProjectWorkspaceState } from './state';
import { map, tap, withLatestFrom } from 'rxjs';
import * as actions from './actions';
import * as selectors from './selectors';
import { DRAWING_SERVICE, DrawingService } from 'src/app/services/drawing/drawing.service';

@Injectable()
export class Effects {
    private readonly actionStream = inject(Actions);
    private readonly store = inject(Store<ProjectWorkspaceState>);

    constructor(
        @Inject(DRAWING_SERVICE) private drawingService: DrawingService
    ) {}

    public updateDiagramViewportHeight = createEffect(() => this.actionStream.pipe(
        ofType(
            actions.workspaceViewportHeight
        ),
        withLatestFrom(
            this.store.select(selectors.workspaceCanvasHeight)
        ),
        map(([action, currentCanvasHeight]) =>
            actions.workspaceCanvasHeight({ height: Math.max(action.height, currentCanvasHeight) })
        )
    ));

    public updateDiagramViewportWidth = createEffect(() => this.actionStream.pipe(
        ofType(
            actions.workspaceViewportWidth
        ),
        withLatestFrom(
            this.store.select(selectors.workspaceCanvasWidth)
        ),
        map(([action, currentCanvasWidth]) =>
            actions.workspaceCanvasWidth({ width: Math.max(action.width, currentCanvasWidth) })
        )
    ));

    public updateDiagramCanvasHeight = createEffect(() => this.actionStream.pipe(
        ofType(
            actions.workspaceCanvasHeight
        ),
        map(() => 
            actions.redraw()
        )
    ));

    public updateDiagramCanvasWidth = createEffect(() => this.actionStream.pipe(
        ofType(
            actions.workspaceCanvasWidth
        ),
        map(() => 
            actions.redraw()
        )
    ));

    public redrawCanvas = createEffect(() => this.actionStream.pipe(
        ofType(
            actions.workspaceCanvasContext,
            actions.redraw
        ),
        withLatestFrom(
            this.store.select(selectors.workspaceCanvasContext)
        ),
        tap(([action, context]) => {
            this.drawingService.redraw(context);
        })
    ), { dispatch: false });
}

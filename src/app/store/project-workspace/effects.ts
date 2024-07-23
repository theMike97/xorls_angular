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

    public detectDiagramViewportHeightUpdate = createEffect(() => this.actionStream.pipe(
        ofType(
            actions.workspaceViewportHeightUpdated,
        ),
        withLatestFrom(
            this.store.select(selectors.workspaceCanvasHeight)
        ),
        tap(([action, currentViewportHeight]) => {
            if (currentViewportHeight < action.height) {
                this.store.dispatch(actions.workspaceCanvasHeight({ height: action.height }));
            }
        })
    ), { dispatch: false });

    public detectDiagramViewportWidtheUpdate = createEffect(() => this.actionStream.pipe(
        ofType(
            actions.workspaceViewportWidthUpdated,
        ),
        withLatestFrom(
            this.store.select(selectors.workspaceCanvasWidth)
        ),
        tap(([action, currentViewportWidth]) => {
            if (currentViewportWidth < action.width) {
                this.store.dispatch(actions.workspaceCanvasWidth({ width: action.width }));
            }
        })
    ), { dispatch: false });

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
            actions.redraw
        ),
        tap(() => {
            this.drawingService.redraw()
        })
    ), { dispatch: false });
}

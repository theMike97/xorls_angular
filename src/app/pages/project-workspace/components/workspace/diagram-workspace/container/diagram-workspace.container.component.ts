import { type AfterViewInit, ChangeDetectionStrategy, Component, type ElementRef, Inject, inject, Input, type OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { type ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import { DiagramWorkspace } from 'src/app/models/workspace/diagram-workspace';
import * as actions from '../../../../../../store/project-workspace/actions';
import * as selectors from '../../../../../../store/project-workspace/selectors';
import { DrawingService, DRAWING_SERVICE } from '../../../../../../services/drawing/drawing.service';

@Component({
    selector: 'app-diagram-workspace-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-diagram-workspace-presenter
            [height]="$canvasHeight | async"
            [width]="$canvasWidth | async"
            (canvasContext)="setCanvasContext($event)"
        ></app-diagram-workspace-presenter>
    `
})
export class DiagramWorkspaceContainerComponent implements AfterViewInit, OnDestroy {
    private readonly store = inject(Store<ProjectWorkspaceState>);
    private readonly appWorkspaceResizeObserver: ResizeObserver;
    public workspace: DiagramWorkspace;

    // TODO: refactor so that canvas width is stored in the passed in workspace object and viewport size is in the state.
    protected $canvasHeight = this.store.select(selectors.workspaceCanvasHeight);
    protected $canvasWidth  = this.store.select(selectors.workspaceCanvasWidth);

    @Input() parentElement: ElementRef;

    public constructor(
        @Inject(DRAWING_SERVICE) private drawingService: DrawingService
    ) {
        // this.workspace = new DiagramWorkspace();
        this.appWorkspaceResizeObserver = new ResizeObserver((resizeEntries: ResizeObserverEntry[]) => {
            this.store.dispatch(actions.workspaceViewportHeight({ height: resizeEntries[0].contentRect.height }));
            this.store.dispatch(actions.workspaceViewportWidth({ width: resizeEntries[0].contentRect.width }));
        });
    }

    ngAfterViewInit(): void {
        this.appWorkspaceResizeObserver.observe(this.parentElement.nativeElement);
    }

    ngOnDestroy(): void {
        this.appWorkspaceResizeObserver.unobserve(this.parentElement.nativeElement);
    }

    setCanvasContext(context: CanvasRenderingContext2D) {
        this.store.dispatch(actions.workspaceCanvasContext({ context }));
    }
}

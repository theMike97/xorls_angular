import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as selectors from '../../../../../../store/project-workspace/selectors';
import { DiagramWorkspace } from 'src/app/models/workspace/diagram-workspace';

@Component({
    selector: 'app-diagram-workspace-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-diagram-workspace-presenter
            [height]="adjustedCanvasHeight(viewportHeight | async, this.workspace.getHeight())"
            [width]="adjustedCanvasWidth(viewportWidth | async, this.workspace.getWidth())"
            [workspace]="workspace"
        ></app-diagram-workspace-presenter>
    `
})
export class DiagramWorkspaceContainerComponent {

    public viewportHeight = this.store.select(selectors.workspaceViewportHeight);
    public viewportWidth = this.store.select(selectors.workspaceViewportWidth);

    public workspace: DiagramWorkspace;

    public constructor(private store: Store<ProjectWorkspaceState>) {
        this.workspace = new DiagramWorkspace();
    }

    adjustedCanvasHeight(viewportHeight: number, canvasHeight: number): number {
        this.workspace.setHeight(Math.max(viewportHeight, canvasHeight));
        return this.workspace.getHeight();
    }

    adjustedCanvasWidth(viewportWidth: number, canvasWidth: number): number {
        this.workspace.setWidth(Math.max(viewportWidth, canvasWidth));
        return this.workspace.getWidth();
    }
    
}
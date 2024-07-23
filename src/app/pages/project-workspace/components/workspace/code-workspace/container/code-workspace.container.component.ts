import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CodeWorkspace } from 'src/app/models/workspace/code-workspace';
import { type ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as selectors from '../../../../../../store/project-workspace/selectors';

@Component({
    selector: 'app-code-workspace-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-code-workspace-presenter
            [workspace]="workspace"
            style="display: block; height: 100%; overflow: hidden;"
        ></app-code-workspace-presenter>
    `
})
export class CodeWorkspaceContainerComponent {
    private readonly store = inject(Store<ProjectWorkspaceState>);
    public viewportHeight = this.store.select(selectors.workspaceCanvasHeight);
    public viewportWidth = this.store.select(selectors.workspaceCanvasWidth);
    public workspace: CodeWorkspace;

    constructor() {
        this.workspace = new CodeWorkspace();
    }
}

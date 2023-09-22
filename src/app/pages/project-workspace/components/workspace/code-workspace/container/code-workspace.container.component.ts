import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CodeWorkspace } from "src/app/models/workspace/code-workspace";
import { ProjectWorkspaceState } from "src/app/store/project-workspace/state";
import * as selectors from '../../../../../../store/project-workspace/selectors';

@Component({
    selector: 'app-code-workspace-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-code-workspace-presenter
            [workspace]="workspace"
            style="display: block; height: 100%; overflow: hidden;"
        ></app-code-workspace-presenter>
    `,
})
export class CodeWorkspaceContainerComponent {

    public viewportHeight = this.store.select(selectors.workspaceViewportHeight);
    public viewportWidth = this.store.select(selectors.workspaceViewportWidth);
    public workspace: CodeWorkspace;

    constructor(private store: Store<ProjectWorkspaceState>) {
        this.workspace = new CodeWorkspace();
    }

}
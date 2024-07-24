import { type AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, type OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Workspace, WorkspaceType } from 'src/app/models/workspace/workspace';
import { type ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as actions from '../../../../store/project-workspace/actions';
import * as selectors from '../../../../store/project-workspace/selectors';
import { DiagramWorkspace } from 'src/app/models/workspace/diagram-workspace';
import { CodeWorkspace } from 'src/app/models/workspace/code-workspace';


@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceComponent {
    public readonly elRef = inject(ElementRef);

    // Public workspace: Workspace;
    public workspaceType: typeof WorkspaceType = WorkspaceType;

    protected workspaceTabs: Workspace[] = [
        new DiagramWorkspace(),
        new CodeWorkspace()
    ];
}

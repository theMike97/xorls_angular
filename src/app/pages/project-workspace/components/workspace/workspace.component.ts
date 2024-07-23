import { type AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, type OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Workspace, WorkspaceType } from 'src/app/models/workspace/workspace';
import { workspaceFactory } from 'src/app/models/workspace/workspace-factory';
import { type ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as actions from '../../../../store/project-workspace/actions';
import * as selectors from '../../../../store/project-workspace/selectors';


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
        workspaceFactory(WorkspaceType.DIAGRAM),
        workspaceFactory(WorkspaceType.CODE)
    ];
}

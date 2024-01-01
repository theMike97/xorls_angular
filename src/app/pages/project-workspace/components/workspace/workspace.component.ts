import { type AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Workspace, WorkspaceType } from 'src/app/models/workspace/workspace';
import { workspaceFactory } from 'src/app/models/workspace/workspace-factory';
import { type ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as actions from '../../../../store/project-workspace/actions';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceComponent implements AfterViewInit {
    private readonly elRef = inject(ElementRef);
    private readonly store = inject(Store<ProjectWorkspaceState>);
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    // Public workspace: Workspace;
    public workspaceType: typeof WorkspaceType = WorkspaceType;

    protected workspaceTabs: Workspace[] = [
        workspaceFactory(WorkspaceType.DIAGRAM),
        workspaceFactory(WorkspaceType.CODE)
    ];

    ngAfterViewInit(): void {
        this.store.dispatch(actions.workspaceViewportHeight({ height: (this.elRef.nativeElement.offsetHeight as number) }));
        this.store.dispatch(actions.workspaceViewportWidth({ width: (this.elRef.nativeElement.offsetWidth as number) + 43 }));
        this.changeDetectorRef.detectChanges(); // Avoid the NG0100 error
    }
}

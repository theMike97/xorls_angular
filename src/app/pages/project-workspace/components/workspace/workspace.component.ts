import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Workspace, WorkspaceType } from 'src/app/models/workspace/workspace';
import { workspaceFactory } from 'src/app/models/workspace/workspace-factory';
import { ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as actions from '../../../../store/project-workspace/actions';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceComponent implements AfterViewInit {

    // public workspace: Workspace;
    public WorkspaceType: typeof WorkspaceType = WorkspaceType;

    protected workspaceTabs: Workspace[] = [
        workspaceFactory(WorkspaceType.DIAGRAM),
        workspaceFactory(WorkspaceType.CODE)
    ];

    // inject workspacetype into constructor after creating new file
    public constructor(private elRef: ElementRef, private store: Store<ProjectWorkspaceState>, private changeDetectorRef: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.store.dispatch(actions.workspaceViewportHeight({ height: this.elRef.nativeElement.offsetHeight }));
        this.store.dispatch(actions.workspaceViewportWidth({ width: this.elRef.nativeElement.offsetWidth + 43}));
        this.changeDetectorRef.detectChanges(); // avoid the NG0100 error
    }

}

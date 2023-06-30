import { Component } from '@angular/core';
import { Workspace, WorkspaceType } from 'src/app/models/workspace/workspace';
import { workspaceFactory } from 'src/app/models/workspace/workspace-factory';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {

    public workspace: Workspace;
    public WorkspaceType: typeof WorkspaceType = WorkspaceType;

    // inject workspacetype into constructor after creating new file
    public workspaceType: WorkspaceType = WorkspaceType.DIAGRAM;
    public constructor() {
        this.workspace = workspaceFactory(this.workspaceType);
    }

}

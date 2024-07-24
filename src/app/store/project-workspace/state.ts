import { type SelectedComponent } from 'src/app/models/components';
import { WorkspaceCanvas, WorkspaceViewport } from 'src/app/models/state models/workspace-canvas';

export interface ProjectWorkspaceState {
    name: string;
    viewport: WorkspaceViewport;
    canvas: WorkspaceCanvas;
    selectedComponent: SelectedComponent;
}

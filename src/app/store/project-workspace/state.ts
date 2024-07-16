import { type SelectedComponent } from 'src/app/models/components';

export interface ProjectWorkspaceState {
    viewportHeight: number;
    viewportWidth: number;
    selectedComponent: SelectedComponent;
}

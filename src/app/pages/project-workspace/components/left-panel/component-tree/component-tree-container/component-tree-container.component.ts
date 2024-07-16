import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { type ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as actions from '../../../../../../store/project-workspace/actions';
import { ComponentFactory, type ComponentName } from 'src/app/models/components';

@Component({
    selector: 'app-component-tree-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-component-tree-presenter
            (selectComponent)="selectComponent($event)"
        ></app-component-tree-presenter>
    `
})
export class ComponentTreeContainerComponent {
    private readonly store = inject(Store<ProjectWorkspaceState>);

    public selectComponent(name: ComponentName): void {
        const component = ComponentFactory.createComponent(name);
        this.store.dispatch(actions.componentPanelSelectComponent({ component }));
    }
}

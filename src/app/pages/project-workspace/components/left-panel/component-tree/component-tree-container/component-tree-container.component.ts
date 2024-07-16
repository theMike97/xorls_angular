import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-component-tree-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-component-tree-presenter
        ></app-component-tree-presenter>
    `
})
export class ComponentTreeContainerComponent {

}

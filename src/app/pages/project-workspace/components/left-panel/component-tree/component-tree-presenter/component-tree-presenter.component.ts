import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import type { MenuItem } from 'primeng/api';
import { ComponentName } from 'src/app/models/components';

@Component({
    selector: 'app-component-tree-presenter',
    templateUrl: './component-tree-presenter.component.html',
    styleUrls: ['./component-tree-presenter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTreePresenterComponent implements OnInit {
    protected componentList: MenuItem[];

    ngOnInit(): void {
        this.componentList = [
            {
                label: 'Gates',
                items: [
                    { label: ComponentName.AND, icon: 'pi pi-eraser' },
                    { label: ComponentName.OR },
                    { label: ComponentName.XOR },
                    { label: ComponentName.NOT },
                    { label: ComponentName.NAND },
                    { label: ComponentName.NOR },
                    { label: ComponentName.XNOR }
                ]
            },
            {
                label: 'I/O',
                items: [
                    { label: ComponentName.INPUT_BIT },
                    { label: ComponentName.OUTPUT_LED },
                    { label: ComponentName.SEVEN_SEG },
                    { label: ComponentName.CLOCK },
                    { label: ComponentName.SPLITTER },
                    { label: ComponentName.JOINER }
                ]
            },
            {
                label: 'Misc',
                items: [
                    { label: ComponentName.TEXT }
                ]
            }
        ];
    }
}

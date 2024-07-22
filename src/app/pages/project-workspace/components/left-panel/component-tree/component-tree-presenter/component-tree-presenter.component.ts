import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { type OnInit } from '@angular/core';
import { type MenuItem } from 'primeng/api';
import { MenuItemContent } from 'primeng/menu';
import { ComponentName } from 'src/app/models/components';

@Component({
    selector: 'app-component-tree-presenter',
    templateUrl: './component-tree-presenter.component.html',
    styleUrls: ['./component-tree-presenter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTreePresenterComponent implements OnInit {
    @Output() public selectComponent = new EventEmitter<ComponentName>();

    protected componentList: MenuItem[];

    ngOnInit(): void {
        // Divide the component categories into separate lists
        const gateList = [
            { name: ComponentName.AND, icon: 'pi pi-eraser' },
            { name: ComponentName.OR, icon: '' },
            { name: ComponentName.XOR, icon: '' },
            { name: ComponentName.NOT, icon: '' },
            { name: ComponentName.NAND, icon: '' },
            { name: ComponentName.NOR, icon: '' },
            { name: ComponentName.XNOR, icon: '' }
        ];
        const ioList = [
            { name: ComponentName.INPUT_BIT, icon: '' },
            { name: ComponentName.OUTPUT_LED, icon: '' },
            { name: ComponentName.SEVEN_SEG, icon: '' },
            { name: ComponentName.CLOCK, icon: '' },
            { name: ComponentName.SPLITTER, icon: '' },
            { name: ComponentName.JOINER, icon: '' }
        ];
        const miscList = [
            { name: ComponentName.TEXT, icon: '' }
        ];

        // Populate list of all components by category
        this.componentList = [
            {
                label: 'Gates',
                items: gateList.map(gate => ({
                    label: gate.name,
                    icon: gate.icon,
                    command: () => {
                        this.selectComponent.emit(gate.name);
                    }
                }))
            },
            {
                label: 'I/O',
                items: ioList.map(io => ({
                    label: io.name,
                    icon: io.icon,
                    command: () => {
                        this.selectComponent.emit(io.name);
                    }
                }))
            },
            {
                label: 'Misc',
                items: miscList.map(misc => ({
                    label: misc.name,
                    icon: misc.icon,
                    command: () => {
                        this.selectComponent.emit(misc.name);
                    }
                }))
            }
        ];
    }
}

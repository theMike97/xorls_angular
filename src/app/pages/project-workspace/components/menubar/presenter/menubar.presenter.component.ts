import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-menubar-presenter',
	templateUrl: './menubar.presenter.component.html',
	styleUrls: ['./menubar.presenter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenubarPresenterComponent implements OnInit {

	@Output() public openSettingsDialog = new EventEmitter<void>();

	protected items: MenuItem[];
	
	public constructor() {}

	ngOnInit(): void {
		this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New Component',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Block Diagram',
                                icon: 'pi pi-box'
                            },
                            {
                                label: 'VHDL',
                                icon: 'pi pi-code'
                            }
                        ]
                    },
                    {
                        label: 'Import Component',
                        icon: 'pi pi-file-import'
                    },
                    {
                        label: 'Export Component',
                        icon: 'pi pi-file-export',
                        items: [
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'PDF',
                                icon: 'pi pi-file-pdf'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-pencil',
                items: [
                    {
                        label: 'undo',
                        icon: 'pi pi-undo'
                    },
                    {
                        label: 'redo',
                        icon: 'pi pi-refresh'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'paste',
                        icon: 'pi pi-calendar'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Preferences',
                        icon: 'pi pi-wrench',
						command: () => this.openSettingsDialog.emit()
                    }
                ]
            },
            {
                label: 'run',
                icon: 'pi pi-play'
            }
        ];
	}
}


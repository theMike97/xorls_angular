import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-menubar',
	templateUrl: './menubar.component.html',
	styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
	public items: MenuItem[];
	
	public constructor() {}

	public ngOnInit(): void {
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
				icon: 'pi pi-file-edit',
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
						label: 'Workspace Settings',
						icon: 'pi pi-wrench'
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

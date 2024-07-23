import { Component, ElementRef, type OnInit, ViewChild } from '@angular/core';

/* eslint-disable */
@Component({
    selector: 'app-project-workspace',
    templateUrl: './parent-container.component.html',
    styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit {
    @ViewChild('appWorkspace', { read: ElementRef }) workspaceRef: ElementRef;

    public value: string;

    ngOnInit(): void {
        this.value = 'Project Name Here';
    }
}

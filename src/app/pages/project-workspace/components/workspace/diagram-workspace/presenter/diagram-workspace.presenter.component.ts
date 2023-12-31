import { type AfterViewInit, ChangeDetectionStrategy, Component, type ElementRef, Input, ViewChild } from '@angular/core';
import { type DiagramWorkspace } from 'src/app/models/workspace/diagram-workspace';

@Component({
    selector: 'app-diagram-workspace-presenter',
    templateUrl: './diagram-workspace.presenter.component.html',
    styleUrls: ['./diagram-workspace.presenter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramWorkspacePresenterComponent implements AfterViewInit {
    @Input() height = 0;
    @Input() width = 0;
    @Input() workspace: DiagramWorkspace;

    @ViewChild('diagramWorkspace')
    public canvas: ElementRef<HTMLCanvasElement>;

    public context: CanvasRenderingContext2D;

    ngAfterViewInit(): void {
        this.context = this.canvas.nativeElement.getContext('2d');
    }
}

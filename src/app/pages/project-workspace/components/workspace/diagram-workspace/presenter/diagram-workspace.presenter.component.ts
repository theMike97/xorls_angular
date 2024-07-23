import { type AfterViewInit, ChangeDetectionStrategy, Component, type ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { type DiagramWorkspace } from 'src/app/models/workspace/diagram-workspace';
import { DRAWING_SERVICE, DrawingService } from 'src/app/services/drawing/drawing.service';

@Component({
    selector: 'app-diagram-workspace-presenter',
    templateUrl: './diagram-workspace.presenter.component.html',
    styleUrls: ['./diagram-workspace.presenter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramWorkspacePresenterComponent implements AfterViewInit {
    @Input() height: number;
    @Input() width: number;
    @Input() workspace: DiagramWorkspace;

    @ViewChild('diagramWorkspace', { static: false }) 
    public canvas: ElementRef<HTMLCanvasElement>;
    public context: CanvasRenderingContext2D;

    constructor(
        @Inject(DRAWING_SERVICE) private drawingService: DrawingService
    ) {}

    ngAfterViewInit(): void {
        this.context = this.canvas.nativeElement.getContext('2d');
        this.context.fillRect(0, 0, 150, 75);
        // this.drawingService.redraw();
    }
}

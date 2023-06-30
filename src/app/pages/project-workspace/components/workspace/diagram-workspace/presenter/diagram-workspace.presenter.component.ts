import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DiagramWorkspace } from 'src/app/models/workspace/diagram-workspace';

@Component({
  selector: 'app-diagram-workspace-presenter',
  templateUrl: './diagram-workspace.presenter.component.html',
  styleUrls: ['./diagram-workspace.presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramWorkspacePresenterComponent implements AfterViewInit {
    
    @ViewChild('diagramWorkspace')
    public canvas: ElementRef<HTMLCanvasElement>;
    public context: CanvasRenderingContext2D;

    workspace: DiagramWorkspace;

    public constructor() {
        this.workspace = new DiagramWorkspace();
    }

    ngAfterViewInit(): void {
        this.context = this.canvas.nativeElement.getContext('2d');
    }


}

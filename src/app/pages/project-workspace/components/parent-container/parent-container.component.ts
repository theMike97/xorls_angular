import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectWorkspaceState } from 'src/app/store/project-workspace/state';
import * as actions from '../../../../store/project-workspace/actions';

@Component({
  selector: 'app-project-workspace',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('appWorkspace', { read: ElementRef }) workspaceRef: ElementRef;

    private appWorkspaceResizeObserver: ResizeObserver;

    public value: string;

    public constructor(private store: Store<ProjectWorkspaceState>) {
        this.appWorkspaceResizeObserver = new ResizeObserver(resizeEntries => {
            this.store.dispatch(actions.workspaceViewportHeight({ height: resizeEntries[0].contentRect.height }));
            this.store.dispatch(actions.workspaceViewportWidth({ width: resizeEntries[0].contentRect.width }));
        });
    }

    ngOnInit(): void {
        this.value = "Project Name Here";
    }

    ngAfterViewInit(): void {
        this.appWorkspaceResizeObserver.observe(this.workspaceRef.nativeElement);
    }

    ngOnDestroy(): void {
        this.appWorkspaceResizeObserver.unobserve(this.workspaceRef.nativeElement);
    }


}

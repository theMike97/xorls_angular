import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import { type CodeModel } from '@ngstack/code-editor';
import { type CodeWorkspace } from 'src/app/models/workspace/code-workspace';

@Component({
    selector: 'app-code-workspace-presenter',
    templateUrl: './code-workspace.presenter.component.html',
    styleUrls: ['./code-workspace.presenter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeWorkspacePresenterComponent implements OnInit {
    @Input() workspace: CodeWorkspace;
    model: CodeModel;

    ngOnInit(): void {
        this.model = {
            language: '',
            uri: this.workspace.uri,
            value: this.workspace.code
        };
    }
}

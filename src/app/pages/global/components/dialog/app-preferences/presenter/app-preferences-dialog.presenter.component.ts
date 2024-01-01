import { ChangeDetectionStrategy, Component, EventEmitter, Input, type OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { type Action } from '@ngrx/store';
import { type ApplicationPreferences } from 'src/app/models/app-preferences';
import { type Dialog, DialogType } from 'src/app/models/dialog';
import { GridStyle } from 'src/app/models/grid-style';

/* eslint-disable */
@Component({
    selector: 'app-preferences-dialog-presenter',
    templateUrl: './app-preferences-dialog.presenter.component.html',
    styleUrls: ['./app-preferences-dialog.presenter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPreferencesDialogPresenterComponent implements OnInit {
    @Input() dialogInfo: Dialog;
    @Input() appPreferencesSnapshot: ApplicationPreferences;
    @Output() preferencesChangesOk = new EventEmitter<ApplicationPreferences>();
    @Output() preferencesChangesCancel = new EventEmitter<void>();
    @Output() execDialogOption = new EventEmitter<Action>();

    public dialogType: typeof DialogType = DialogType;
    protected gridStyleOptions: GridStyle[] = [
        GridStyle.DOTS,
        GridStyle.LINES
    ];

    public preferencesForm!: FormGroup;

    constructor() {
        this.dialogInfo = null;
    }

    ngOnInit(): void {
        this.populatePreferencesFormWithSnapshotData();
    }

    public closeDialog(): void {
        console.log('dialog closed');
    }

    protected applyPreferencesChanges(): void {
        this.preferencesChangesOk.emit({
            generalSettings: {},
            diagramWorkspaceSettings: {
                gridStyle: this.preferencesForm.value.gridStyle
            },
            codeWorkspaceSettings: {
                indentSpaces: this.preferencesForm.value.indentSpaces
            }
        } as ApplicationPreferences);
    }

    protected cancelPreferencesChanges(): void {
        this.preferencesChangesCancel.emit();
        this.populatePreferencesFormWithSnapshotData();
    }

    private populatePreferencesFormWithSnapshotData() {
        this.preferencesForm = new FormGroup({
            gridStyle: new FormControl(this.appPreferencesSnapshot.diagramWorkspaceSettings.gridStyle),
            indentSpaces: new FormControl(this.appPreferencesSnapshot.codeWorkspaceSettings.indentSpaces)
        });
    }
}

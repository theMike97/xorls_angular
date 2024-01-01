import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { type AppState } from 'src/app/store/app/state';
import * as actions from '../../../../../store/app/actions';

@Component({
    selector: 'app-menubar-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-menubar-presenter
            (openSettingsDialog)="openSettingsDialog()"
        ></app-menubar-presenter>
    `
})
export class MenubarContainerComponent {
    private readonly store = inject(Store<AppState>);

    public openSettingsDialog(): void {
        this.store.dispatch(actions.openAppPreferencesDialog());
    }
}

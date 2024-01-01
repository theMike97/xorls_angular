import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { Store, type Action } from '@ngrx/store';
import { type AppState } from 'src/app/store/app/state';
import * as selectors from '../../../../../../store/app/selectors';
import * as actions from '../../../../../../store/app/actions';
import { type ApplicationPreferences } from 'src/app/models/app-preferences';
import { first } from 'rxjs';

@Component({
    selector: 'app-preferences-dialog-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-preferences-dialog-presenter
            [dialogInfo]="dialogInfo | async"
            [appPreferencesSnapshot]="appPreferencesSnapshot"
            (preferencesChangesOk)="applyPreferencesChanges($event)"
            (preferencesChangesCancel)="cancelPreferencesChanges()"
            (execDialogOption)="dispatchDialogOptionAction($event)"
        ></app-preferences-dialog-presenter>
    `
})
export class AppPreferencesDialogContainerComponent implements OnInit {
    private readonly store = inject(Store<AppState>);
    private readonly appPreferences = this.store.select(selectors.appPreferences);
    public dialogInfo = this.store.select(selectors.globalDialogInfo);
    public appPreferencesSnapshot: ApplicationPreferences;

    ngOnInit(): void {
        this.appPreferences.pipe(first()).subscribe(preferences => {
            this.appPreferencesSnapshot = preferences;
        });
    }

    protected applyPreferencesChanges($event: ApplicationPreferences): void {
        this.store.dispatch(actions.executeAppPreferencesOk({ appPreferences: $event }));
    }

    protected cancelPreferencesChanges(): void {
        this.store.dispatch(actions.executeAppPreferencesCancel());
    }

    protected dispatchDialogOptionAction($event: Action) {
        this.store.dispatch($event);
    }
}

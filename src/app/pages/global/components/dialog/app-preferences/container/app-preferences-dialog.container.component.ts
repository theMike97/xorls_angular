import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Action, ActionCreator, Store } from "@ngrx/store";
import { AppState } from "src/app/store/app/state";
import * as selectors from '../../../../../../store/app/selectors';
import * as actions from '../../../../../../store/app/actions';
import { ApplicationPreferences } from "src/app/models/app-preferences";
import { first } from "rxjs";

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
export class AppPreferencesDialogContainerComponent implements OnInit{

    public dialogInfo = this.store.select(selectors.globalDialogInfo);
    public appPreferencesSnapshot: ApplicationPreferences;
    private appPreferences = this.store.select(selectors.appPreferences);

    public constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.appPreferences.pipe(first()).subscribe((preferences) => this.appPreferencesSnapshot = preferences);
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
import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPreferencesDialogPresenterComponent } from './app-preferences-dialog.presenter.component';

describe('MenubarComponent', () => {
    let component: AppPreferencesDialogPresenterComponent;
    let fixture: ComponentFixture<AppPreferencesDialogPresenterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppPreferencesDialogPresenterComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AppPreferencesDialogPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

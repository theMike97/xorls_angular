import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPresenterComponent } from './app-preferences-dialog.presenter.component';

describe('MenubarComponent', () => {
    let component: DialogPresenterComponent;
    let fixture: ComponentFixture<DialogPresenterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ DialogPresenterComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(DialogPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

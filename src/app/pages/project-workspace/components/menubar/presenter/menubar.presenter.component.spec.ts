import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarPresenterComponent } from './menubar.presenter.component';

describe('MenubarComponent', () => {
    let component: MenubarPresenterComponent;
    let fixture: ComponentFixture<MenubarPresenterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ MenubarPresenterComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(MenubarPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

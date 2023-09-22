import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramWorkspacePresenterComponent } from './diagram-workspace.presenter.component';

describe('WorkspaceComponent', () => {
  let component: DiagramWorkspacePresenterComponent;
  let fixture: ComponentFixture<DiagramWorkspacePresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramWorkspacePresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramWorkspacePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

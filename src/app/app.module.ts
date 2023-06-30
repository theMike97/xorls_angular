import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { AccordionModule } from 'primeng/accordion';

import { LeftPanelComponent } from './pages/project-workspace/components/left-panel/left-panel-presenter.component';
import { StatusBarComponent } from './pages/project-workspace/components/status-bar/status-bar.component';
import { DiagramWorkspaceContainerComponent } from './pages/project-workspace/components/workspace/diagram-workspace/container/diagram-workspace.container.component';
import { DiagramWorkspacePresenterComponent } from './pages/project-workspace/components/workspace/diagram-workspace/presenter/diagram-workspace.presenter.component';
import { ParentContainerComponent } from './pages/project-workspace/components/parent-container/parent-container.component';

import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { metaReducers } from './store/meta-reducers';
import { MenubarComponent } from './pages/project-workspace/components/menubar/menubar.component';
import { WorkspaceComponent } from './pages/project-workspace/components/workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    StatusBarComponent,
    DiagramWorkspaceContainerComponent,
    DiagramWorkspacePresenterComponent,
    ParentContainerComponent,
    MenubarComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    ToolbarModule,
    TabViewModule,
    TooltipModule,
    TreeModule,
    AccordionModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

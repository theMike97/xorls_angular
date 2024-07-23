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
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { LeftPanelComponent } from './pages/project-workspace/components/left-panel/left-panel-presenter.component';
import { StatusBarComponent } from './pages/project-workspace/components/status-bar/status-bar.component';
import { DiagramWorkspaceContainerComponent } from './pages/project-workspace/components/workspace/diagram-workspace/container/diagram-workspace.container.component';
import { DiagramWorkspacePresenterComponent } from './pages/project-workspace/components/workspace/diagram-workspace/presenter/diagram-workspace.presenter.component';
import { ParentContainerComponent } from './pages/project-workspace/components/parent-container/parent-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';

import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { metaReducers } from './store/meta-reducers';
import { MenubarContainerComponent } from './pages/project-workspace/components/menubar/container/menubar.container.component';
import { MenubarPresenterComponent } from './pages/project-workspace/components/menubar/presenter/menubar.presenter.component';
import { WorkspaceComponent } from './pages/project-workspace/components/workspace/workspace.component';
import { AppPreferencesDialogContainerComponent } from './pages/global/components/dialog/app-preferences/container/app-preferences-dialog.container.component';
import { AppPreferencesDialogPresenterComponent } from './pages/global/components/dialog/app-preferences/presenter/app-preferences-dialog.presenter.component';
import { CommonModule } from '@angular/common';
import { CodeWorkspaceContainerComponent } from './pages/project-workspace/components/workspace/code-workspace/container/code-workspace.container.component';
import { CodeWorkspacePresenterComponent } from './pages/project-workspace/components/workspace/code-workspace/presenter/code-workspace.presenter.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ComponentTreeContainerComponent } from './pages/project-workspace/components/left-panel/component-tree/component-tree-container/component-tree-container.component';
import { ComponentTreePresenterComponent } from './pages/project-workspace/components/left-panel/component-tree/component-tree-presenter/component-tree-presenter.component';
import { ServicesModule } from './services/services.module';

@NgModule({
    declarations: [
        AppComponent,
        AppPreferencesDialogContainerComponent,
        AppPreferencesDialogPresenterComponent,
        CodeWorkspaceContainerComponent,
        CodeWorkspacePresenterComponent,
        ComponentTreeContainerComponent,
        ComponentTreePresenterComponent,
        DiagramWorkspaceContainerComponent,
        DiagramWorkspacePresenterComponent,
        LeftPanelComponent,
        MenubarContainerComponent,
        MenubarPresenterComponent,
        ParentContainerComponent,
        StatusBarComponent,
        WorkspaceComponent
    ],
    imports: [
        AccordionModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        CommonModule,
        CodeEditorModule.forRoot(),
        DialogModule,
        DividerModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        MenubarModule,
        MenuModule,
        PanelMenuModule,
        ReactiveFormsModule,
        TabViewModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        EffectsModule.forRoot(effects), // eslint-disable-line
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        ServicesModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

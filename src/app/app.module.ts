import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MenuComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

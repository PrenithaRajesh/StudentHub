import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // here add the components that you want AgGrid to use
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

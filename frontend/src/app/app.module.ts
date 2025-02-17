import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry } from 'ag-grid-community';

import { MatDialogModule } from '@angular/material/dialog';
import { AddMapComponent } from './components/add-map/add-map.component'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NameComponent } from './components/name/name.component';

// Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonComponent,
    TableComponent,
    AddMapComponent,
    NameComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,MatCardModule,
    // here add the components that you want AgGrid to use
    AgGridModule.withComponents([]),CommonModule,FormsModule,HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common'; 
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthModule } from './auth.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {DataTableModule} from "angular-6-datatable";
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import { DataService } from './_services/data.service';
@NgModule({
   declarations: [
    AppComponent,
    
    
  ],
  imports: [
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    PdfViewerModule,
    DataTableModule,
    DeviceDetectorModule
  ],
  providers: [ScriptLoaderService, DataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

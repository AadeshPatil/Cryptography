import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterationComponent } from './pages/registeration/registeration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataserviseService } from './service/dataservise.service';
import { EncrpitionComponent } from './pages/encrpition/encrpition.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterationComponent,
    EncrpitionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [DataserviseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

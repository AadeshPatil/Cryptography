import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ComponentGuard } from './guards/component.guard';
import { LayoutComponent } from './/layouts/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ColorsComponent } from './pages/ui/colors/colors.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';
import { PanelsComponent } from './pages/ui/panels/panels.component';
import { TabsComponent } from './pages/ui/tabs/tabs.component';
import { AlertsComponent } from './pages/ui/alerts/alerts.component';
import { CardsComponent } from './pages/ui/cards/cards.component';
import { BadgesProgressComponent } from './pages/ui/badges-progress/badges-progress.component';
import { ListComponent } from './pages/ui/list/list.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
//import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent,
                canActivate: [ComponentGuard]
            },
            {
                path: "ui/colors",
                component: ColorsComponent
            },
            {
                path: "ui/typography",
                component: TypographyComponent
            },
            {
                path: "ui/panels",
                component: PanelsComponent
            },
            {
                path: "ui/buttons",
                component: ButtonsComponent
            },
            {
                path: "ui/tabs",
                component: TabsComponent
            },
            {
                path: "ui/alerts",
                component: AlertsComponent
            },
            {
                path: "ui/badges_progress",
                component: BadgesProgressComponent
            },
            {
                path: "ui/lists",
                component: ListComponent
            },
            {
                path: "ui/cards",
                component: CardsComponent
            },
            {
                path: "ui/icons",
                component: IconsComponent,
                canActivate: [ComponentGuard]
            },
            
        ]},
   
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    ColorsComponent,
    TypographyComponent,
    PanelsComponent,
    TabsComponent,
    AlertsComponent,
    CardsComponent,
    BadgesProgressComponent,
    ListComponent,
    IconsComponent,
    ButtonsComponent,
    RegisterComponent,
    
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }

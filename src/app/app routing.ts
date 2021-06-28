import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';

var appRoutes: Routes = [
    {path:'', component:AboutComponent},
    {path:'Sobre mí', component:AboutComponent},
    {path:'Projectos', component:ProjectsComponent},
    {path:'Crear', component:CreateComponent},
    {path:'Contacto', component:ContactComponent},
    {path:'**', component:ErrorComponent},
];
module.export = appRoutes;
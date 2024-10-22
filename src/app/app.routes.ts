//arquivo para estruturar as rotas//
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';


const routes: Routes = [
    {path:'', component: AppComponent}
    
];

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(routes),
        Component 
    ],
    exports:[RouterModule],
})
export class AppRoutingModule{}
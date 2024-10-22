import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient} from "@angular/common/http";
import{FormsModule,ReactiveFormsModule} from '@angular/forms';


NgModule({
    declarations:[
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClient,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers:[]
})
export class AppModule{}
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SkillForm } from './forms/skill';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SkillComponent } from './skill.component';
import { DeveloperService } from "./services/developer";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
    declarations: [
      AppComponent,
      SkillComponent,
      SkillForm
    ],
    providers: [ DeveloperService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

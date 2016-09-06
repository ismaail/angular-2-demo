import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill.component';
import { SkillForm } from './forms/skill';
import { routing } from './app.routing';

@NgModule({
    imports: [ BrowserModule, HttpModule, FormsModule, routing ],
    declarations: [ AppComponent, SkillComponent, SkillForm ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";
import { SkillComponent } from "./skill-component";

@Component({
    selector: "#my-app",
    template: `
        <h1>Angular 2 Beta - Demo App</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Skill', component: SkillComponent }
])

/**
 * AppComponenet class
 */
export class AppComponent { }

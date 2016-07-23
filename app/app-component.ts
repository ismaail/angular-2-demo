import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: '#my-app',
    template: `
        <h1>Angular 2 Beta - Demo App</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

/**
 * AppComponenet class
 */
export class AppComponent { }

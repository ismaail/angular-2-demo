import { provideRouter, RouterConfig } from '@angular/router';
import { SkillComponent } from './skill-component';

const routes: RouterConfig = [
    {
        path: '',
        component: SkillComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];

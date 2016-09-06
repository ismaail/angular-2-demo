import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillComponent } from './skill.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SkillComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

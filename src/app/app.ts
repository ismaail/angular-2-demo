import {
    Component,
    View,
    bootstrap,
    CORE_DIRECTIVES
} from "angular2/angular2";

import { DeveloperService } from "./services/developer";
import { SkillForm } from './forms/skill-form';

@Component({
    selector: "my-app",
    bindings: [DeveloperService],
    templateUrl: "templates/app.html",
    directives: [CORE_DIRECTIVES,  SkillForm]
})

/**
 * AppComponenet class
 */
class AppComponent {
    name: string;
    skills: number[];

    /**
     * Initialse AppComponent Class
     *
     * @param {DeveloperService} developerService
     */
    constructor(developerService: DeveloperService) {
        this.name = developerService.name;
        this.skills = developerService.skills;
    }

    /**
     * Delete Skill
     *
     * @param {Number} index
     */
    deleteSkill(index: Number) {
        this.skills.splice(index, 1);
    }
}

bootstrap(AppComponent);

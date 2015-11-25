import {
    Component,
    View,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
} from 'angular2/angular2';

import { Skill } from '../models/skill';
import { DeveloperService } from "../services/developer";

@Component({
    selector: 'skill-form',
    templateUrl: 'templates/forms/skill.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

/**
 * Skill Form Class
 */
class SkillForm {
    submitted: boolean;
    model: Skill;
    skills: number[];

    /**
     * Initialse SkillForm Class
     *
     * @param developerService
     */
    constructor(developerService: DeveloperService) {
        this.submitted = false;
        this.model = new Skill();
        this.skills = developerService.skills;
    }

    /**
     * OnSubmit add new skill
     */
    onSubmit() {

        this.submitted = true;

        if (! this.model.name.trim()) {
            return;
        }

        this.skills.push(this.model.name);
        this.model.name = null;
    }
}

export { SkillForm }

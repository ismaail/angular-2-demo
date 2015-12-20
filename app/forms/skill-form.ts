import { Component }          from "angular2/core";
import { NgForm }             from "angular2/common";
import { Skill }              from "../models/skill";
import { DeveloperService }   from "../services/developer";

@Component({
    selector: 'skill-form',
    templateUrl: 'templates/forms/skill.html'
})

/**
 * Skill Form Class
 */
class SkillForm {
    submitted: Boolean;
    model: Skill;
    skills: Number[];

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
import { Component, Input } from 'angular2/core';

@Component({
    selector: 'skill-form',
    templateUrl: 'templates/forms/skill.html'
})

/**
 * Skill Form Class
 */
export class SkillForm {
    submitted: Boolean;
    model: Skill;
    @Input() skills: string[];

    /**
     * Initialse SkillForm Class
     */
    constructor() {
        this.submitted = false;
        this.model = { name: '' };
    }

    /**
     * OnSubmit add new skill
     */
    onSubmit(): void {
        this.submitted = true;

        if (! this.model.name.trim()) {
            return;
        }

        this.skills.push(this.model.name);
        this.model.name = null;
    }
}

import { Component, Output, EventEmitter } from '@angular/core';

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
    @Output() addSkill: EventEmitter<string> = new EventEmitter<string>();

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

        this.addSkill.emit(this.model.name);
        this.model.name = null;
    }
}

import { Component } from "angular2/core";
import { DeveloperService } from "./services/developer";
import { SkillForm } from "./forms/skill-form";

@Component({
    bindings: [ DeveloperService ],
    templateUrl: "templates/skill.html",
    directives: [ SkillForm ]
})

/**
 * Skill Component
 */
export class SkillComponent {
    name: string;
    skills: string[];

    /**
     * Initialse AppComponent Class
     *
     * @param {DeveloperService} developerService
     */
    constructor(developerService: DeveloperService) {
        this.name = '';
        this.skills = [];

        developerService.load()
            .subscribe(response => {
                if (200 !== response.status) {
                    console.error("Error fetching data from remote API.");
                    return;
                }

                let data = response.json().data;
                this.name = data.name;
                this.skills = data.skills;
            });
    }

    /**
     * Delete Skill
     *
     * @param {Number} index
     */
    deleteSkill(index: number) {
        this.skills.splice(index, 1);
    }
}

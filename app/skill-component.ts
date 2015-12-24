import { Component }            from "angular2/core";
import { DeveloperService }     from "./services/developer";
import { SkillForm }            from "./forms/skill-form";

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
        this.name = developerService.name;
        this.skills = developerService.skills;
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

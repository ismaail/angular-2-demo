import { Component }            from "angular2/core";
import { DeveloperService }     from "./services/developer";
import { SkillForm }            from "./forms/skill-form";

@Component({
    selector: "#my-app",
    bindings: [ DeveloperService ],
    templateUrl: "templates/app.html",
    directives: [ SkillForm ]
})

/**
 * AppComponenet class
 */
class AppComponent {
    name: String;
    skills: Number[];

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

export { AppComponent }

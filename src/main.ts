import {
    Component,
    View,
    bootstrap,
    NgFor
} from "angular2/angular2";

import { DeveloperService } from "./services/developer";

@Component({
    selector: "my-app",
    appInjector: [DeveloperService]
})
@View({
    templateUrl: "templates/app.html",
    directives: [NgFor]
})

/**
 * AppComponenet class
 */
class AppComponent {
    /**
     * Initialse AppComponent Class
     *
     * @param {DeveloperService} developerService
     */
    constructor(developerService: DeveloperService) {
        this.name = developerService.name;
        this.skills = developerService.skills;
        this.addButton = {
            "disabled": "disabled"
        };
    }
    /**
     * Add new skill to the skills list
     *
     * @param {object} skill
     */
    addToSkills(skill: object) {
        /**
         * @type {string}
         */
        let newSkill = skill.value;

        if (! this.isValidSkill(newSkill)) {
            return;
        }

        this.skills.push(newSkill);

        skill.value = null;
        skill.focus();
        this.addButton.disabled = "disabled";
    }

    /**
     * Listen to new skill input text keyup event
     *
     * @param {object} event
     */
    doneSkillTyping(event: object) {
        // Watch for "Enter" key 13
        if (13 === event.which) {
            this.addToSkills(event.target);
        } else {
            this.addButton.disabled = (this.isValidSkill(event.target.value)) ? "" : "disabled";
        }
    }

    /**
     * Check if skill is valid
     *
     * @param {string }skill
     * @returns {boolean}
     */
    isValidSkill(skill: string) {
        if ("" === skill.trim()) {
            return false;
        }

        return true;
    }

    /**
     * Delete Skill
     *
     * @param {integer} index
     */
    deleteSkill(index: integer) {
        this.skills.splice(index, 1);
    }
}

bootstrap(AppComponent);

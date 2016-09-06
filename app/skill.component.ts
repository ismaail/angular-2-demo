import { Component, OnInit } from '@angular/core';
import { Skill } from './models/skill';
import { DeveloperService } from './services/developer';
// import { SkillForm } from './forms/skill';

@Component({
    providers: [ DeveloperService ],
    templateUrl: 'templates/skill.html'
    // directives: [ SkillForm ]
})

/**
 * Skill Component
 */
export class SkillComponent implements OnInit {
    name: string;
    skills: Array<Skill>;

    /**
     * Construct AppComponent Class
     *
     * @param {DeveloperService} developerService
     */
    constructor(private developerService: DeveloperService) {
        this.name = '';
        this.skills = [];
    }

    /**
     * Initialize AppComponent Class
     */
    ngOnInit(): void {
        this.developerService.getSkills()
            .then(skills => this.skills = skills);
    }

    /**
     * Delete Skill
     *
     * @param {Number} index
     */
    deleteSkill(index: number): void {
        this.skills.splice(index, 1);
    }

    /**
     * Add New Skill.
     *
     * @param {String} name
     */
    createSkill(name: string): void {
        this.skills.push({
            "name": name,
            "level": 0
        });
    }
}

import { Component, OnInit } from 'angular2/core';
import { DeveloperService } from './services/developer';
import { SkillForm } from './forms/skill-form';

@Component({
    providers: [ DeveloperService ],
    templateUrl: 'templates/skill.html',
    directives: [ SkillForm ]
})

/**
 * Skill Component
 */
export class SkillComponent implements OnInit{
    name: string;
    skills: string[];

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
        this.developerService.load()
            .subscribe(response => {
                let data = response.json().data;
                this.name = data.name;
                this.skills = data.skills;
            },
            error => console.error(`${error.status} Error fetching data from url: "${error.url}"`));
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
        this.skills.push(name);
    }
}

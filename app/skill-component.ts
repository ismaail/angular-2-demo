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
                if (200 !== response.status) {
                    console.error('Error fetching data from remote API.');
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
    deleteSkill(index: number): void {
        this.skills.splice(index, 1);
    }
}

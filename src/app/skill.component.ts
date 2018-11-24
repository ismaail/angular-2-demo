import { Component, OnInit } from '@angular/core';

import { DeveloperService } from './services/developer';
import { Developer } from "./models/developer";

@Component({
    templateUrl: './skill.html'
})

/**
 * Skill Component
 */
export class SkillComponent implements OnInit {
    developer: Developer;

    /**
     * Construct AppComponent Class
     *
     * @param {DeveloperService} developerService
     */
    constructor(private developerService: DeveloperService) {}

    /**
     * Initialize AppComponent Class
     */
    ngOnInit(): void {
        this.developerService.find()
            .subscribe(
              developer => this.developer = developer,
              err => console.log('Failed to load Developer data')
            );
    }

    /**
     * Delete Skill
     *
     * @param {Number} index
     */
    deleteSkill(index: number): void {
        this.developer.skills.splice(index, 1);
    }

    /**
     * Add New Skill.
     *
     * @param {String} name
     */
    createSkill(name: string): void {
        this.developer.skills.push({
            "name": name,
            "level": 0
        });
    }
}

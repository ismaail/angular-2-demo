import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Skill } from '../models/skill';

/**
 * Developer Service Class
 */
@Injectable()
export class DeveloperService {
    /**
     * Initialse DeveloperService Class
     */
    constructor(private http: Http) {
        this.http = http;
    }

    /**
     * Get Developer Skills List.
     * @returns {Promise<Skill[]>}
     */
    getSkills(): Promise<Skill[]> {
        const skillsUrl = 'http://localhost:3000/data/skills.json';

        return this.http.get(skillsUrl)
            .toPromise()
            .then(response => response.json().data.skills as Skill[])
            .catch(this.handleError);
    }

    /**
     * Handle Http Get Error
     * @param error
     * @returns {Promise<void>|Promise<T>}
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

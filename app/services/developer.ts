import { Inject } from '@angular/core';
import { Http } from '@angular/http';

/**
 * Developer Service Class
 */
export class DeveloperService {
    http: Http;

    /**
     * Initialse DeveloperService Class
     */
    constructor(@Inject(Http) http: Http) {
        this.http = http;
    }

    load() {
        return this.http.get('http://localhost:3000/data/skills.json');
    }
}

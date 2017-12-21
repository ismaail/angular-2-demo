import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Developer } from '../models/developer';

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
     * @returns {Observable<Developer>}
     */
    find(): Observable<Developer> {
        const url = 'http://localhost:3000/data/skills.json';

        return this.http.get(url)
          .map((res: Response) => <Developer>res.json().data);
    }
}

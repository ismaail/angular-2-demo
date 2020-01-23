import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Developer } from '../models/developer';

/**
 * Developer Service Class
 */
@Injectable()
export class DeveloperService {
    /**
     * Initialse DeveloperService Class
     */
    constructor(private http: HttpClient) {}

    /**
     * Get Developer Skills List.
     * @returns {Observable<Developer>}
     */
    find(): Observable<Developer> {
        const url = 'http://localhost:3000/data/skills.json';

        return this.http.get(url)
            .pipe(
                map((response: HttpResponse<Developer>) => {
                    return response['data'];
                })
            );
    }
}

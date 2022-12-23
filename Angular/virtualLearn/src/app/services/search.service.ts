import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) { }

    topSearch() {
        return this.http.get(environment.url + '/topSearches',  { responseType: 'text' })
    }

    byCategory(body: any){
        return this.http.post(environment.url + '/searchByCategory', body)
    }

}

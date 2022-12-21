import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) { }

getOngoingCourse(){
    
    return this.http.get(environment.url + '/user/ongoingCourses', { responseType: 'text'})
}

getCategory(){
    return this.http.get(environment.url + '/user/categoriesWP', { responseType: 'text'})
}

getAll(){
    return this.http.get(environment.url + '/user/home/course/all/pagination?pageNumber=1&pageLimit=4', { responseType: 'text'})

}

getPopular(){
    return this.http.get(environment.url + '/user/home/course/popular', { responseType: 'text'})

}
getNewest(){
    return this.http.get(environment.url + '/user/home/course/newest', { responseType: 'text'})

}

getTopCourse(){
    return this.http.get(environment.url + '/user/home/course/category', { responseType: 'text'})

}

}

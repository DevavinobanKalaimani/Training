import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) { }


getName(){
    return this.http.get(environment.url + '/getName', { responseType: 'text'})
}
getBanner(){
    return this.http.get(environment.url + '/getBanner', {responseType: 'text'})
}
getCategory(){
    return this.http.post(environment.url + '/getCategories', { responseType: 'text'})
}
getOngoingCourse(){
    
    return this.http.get(environment.url + '/ongoingCourses', { responseType: 'text'})
}

getCourses(body: any){
    return this.http.post(environment.url + '/choiceYourCourse', body)
}

// getTopCourse(){
//     return this.http.get(environment.url + '/user/home/course/category', { responseType: 'text'})

// }

// getHeaderCourse(){
//     return this.http.get(environment.url + '/user/home/course/pagination?pageNumber=1&pageLimit=3', { responseType: 'text'})

// }


}

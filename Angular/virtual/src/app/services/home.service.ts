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
getBanner(count: any){
    return this.http.get(environment.url + '/getBanner?page='+count, {responseType: 'text'})
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

getBusinessCourses(body: any){
    
    return this.http.post(environment.url + '/topCoursesInCategory', body)
}

getDesignCourses(body: any){
   
    return this.http.post(environment.url + '/topCoursesInCategory', body)
}

getAllOngoing(){
    return this.http.get(environment.url + '/ongoingCourses?choice=seeAll')

}

}

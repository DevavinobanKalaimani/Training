import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OverViewService {

    constructor(private http: HttpClient) { }

    getOverview() {

        const body: any = {

            'courseId': sessionStorage.getItem('courseId')
        }
        return this.http.post(environment.url + '/getCourse/overview', body)
    }


    getChapters() {

        const body: any = {

            'courseId': sessionStorage.getItem('courseId'),
            'view': 'chapters'
        }
        return this.http.post(environment.url + '/getCourse/chapters', body)
    }

    UpdateProgress(body: any) {
        return this.http.post(environment.url + '/updateProgress', body)
    }

    getProgress() {
        const body: any = {
            'courseId': sessionStorage.getItem('courseId'),
        }
        return this.http.post(environment.url + '/getProgress', body)
    }

    getVideoData(){

        const body: any = {
            'courseId': sessionStorage.getItem('courseId'),
            "serialNumberOfLesson":sessionStorage.getItem('serialNumber')
        }
        return this.http.post(environment.url + '/getVideoData', body)

    }
}

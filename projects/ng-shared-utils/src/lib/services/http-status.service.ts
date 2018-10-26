import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class HttpStatusService {

    private url: string = '';
    private loginPage: string = '';

    constructor(private http: HttpClient, private router: Router) { }

    configure(url: string, loginPage: string) {
        this.url = url;
        this.loginPage = loginPage;
    }

    setUrl(_url: string) {
        this.url = _url;
    }

    setLoginpage(_page: string) {
        this.loginPage = _page;
    }

    private getToken() {
        let user = StorageService.getSession('user');
        return user === null ? null : JSON.parse(user).jwt;
    }

    private setUrlToken(url, auth) {
        if (!auth) return url;

        if (url.indexOf('?') > -1)
            return `${url}&token=${this.getToken()}`;
        return `${url}?token=${this.getToken()}`;
    }

    post(url: string, data: any, auth: boolean = false): Observable<any> {
        return this.http.post(this.setUrlToken(this.url + url, auth), data, {observe: 'response'});
    }

    get(url: string, auth: boolean = false): Observable<any> {
        if (url.indexOf('http') > -1) {
            return this.http.get(url, {observe: 'response'});
        }
        return this.http.get(this.setUrlToken(this.url + url, auth), {observe: 'response'});
    }

    delete(url: string, auth: boolean = false): Observable<any> {
        return this.http.delete(this.setUrlToken(this.url + url, auth), {observe: 'response'});
    }

    put(url: string, data: any, auth: boolean = false): Observable<any> {
        return this.http.put(this.setUrlToken(this.url + url, auth), data, {observe: 'response'});
    }
}

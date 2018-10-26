import {Injectable} from '@angular/core';
import {HttpStatusService} from "./http-status.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GenericService {

    constructor(private http: HttpStatusService) { }

    create(resource: string, item: any): Observable<any> {
        return this.http.post('/' + resource, item, true);
    }

    list(resource: string, query?: string): Observable<any> {
        return this.http.get('/' + resource + (query ? '?' + query : ''), true);
    }

    listExterno(endpoint: string, query?: string): Observable<any> {
        return this.http.get(endpoint + (query ? '?' + query : ''), false);
    }

    getOne(resource: string, id: any): Observable<any> {
        return this.http.get('/' + resource + '/' + id, true);
    }

    update(resource: string, item: any): Observable<any> {
        return this.http.put('/' + resource, item, true);
    }

    delete(resource: string, id: any): Observable<any> {
        return this.http.delete('/' + resource + '/' + id, true);
    }

    /*upload(resource: string, item: any): Observable<any> {
        return this.http.request(`/${resource}`, item, true);
    }*/

}

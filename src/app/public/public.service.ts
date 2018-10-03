import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';



@Injectable()
export class PublicService {

    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://slimapp/api/users').pipe(map((res: Response) => res.json()))
    }

    addUser(data) {
        return this.http.post('http://slimapp/api/user/add', data).pipe(map((res: Response) => res.json()))
    }

    deleteUser(id) {
        return this.http.delete('http://slimapp/api/user/delete/' + id).pipe(map((res: Response) => res.json()))
    }

    editUser(id,data) {
        return this.http.put('http://slimapp/api/user/update/' + id,data).pipe(map((res: Response) => res.json()))
    }



}
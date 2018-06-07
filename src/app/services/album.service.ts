import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AlbumService {
    baseUrl = "https://jsonplaceholder.typicode.com/photos";

    constructor(private http: Http) { }

    getAlbums() {
        return this.http.get(this.baseUrl).pipe(
            map((response) => response.json())
        );
    }
}
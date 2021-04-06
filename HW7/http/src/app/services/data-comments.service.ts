import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataCommentsService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<any> {
    return this.http.get(`/api/comments`);
  }

  addComment(body): Observable<any> {
    return this.http.get(`/api/comments`, body);
  }
}

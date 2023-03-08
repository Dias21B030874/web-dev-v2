import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from './photo-template';

@Injectable({
  providedIn: 'root'
})
export class AlbumsPhotosService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getPosts(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }
  
}

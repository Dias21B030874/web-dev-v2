import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from './template';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getPosts(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getPost(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addPost(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  updatePost(id: number, title: string): Observable<Album> {
    return this.client.patch<Album>(`${this.BASE_URL}/albums/${id}`, title);
  }

  deletePost(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }
}

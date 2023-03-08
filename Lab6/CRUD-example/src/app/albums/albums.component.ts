import { Component, OnInit } from '@angular/core';
import { Album } from '../template';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  album: Album;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.album = {} as Album;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.albumsService.getPosts().subscribe((albums) =>{
      this.albums = albums;
    })
  }

  addPost(input: HTMLInputElement){
    let title: string = input.value;
    this.album = {
      "userId": 1,
      "id": this.albums.length + 1,
      "title": title,
    }
    input.value = "";
    this.albumsService.addPost(this.album).subscribe((album) => {
      this.albums.push(album); // first place
      this.album = {} as Album;
    });
  }

  deletePost(id: number){
    this.albumsService.deletePost(id).subscribe((album) => {
      this.albums.splice(id, 1);
    });
  }
  
}

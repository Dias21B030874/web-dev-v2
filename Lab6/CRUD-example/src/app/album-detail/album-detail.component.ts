import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../template';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: Album;
  id: number;

  constructor(private albumsService: AlbumsService,
    private route: ActivatedRoute) {
    this.album = {} as Album;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.albumsService.getPost(this.id).subscribe((album) => {
        this.album = album;
      });
    })
  }

  changeTitle(input: HTMLInputElement){
    let title: string = input.value;
    input.value = "";
    this.albumsService.updatePost(this.album.id, title).subscribe((album) => {
      this.album.title = title;
    });
  }
}

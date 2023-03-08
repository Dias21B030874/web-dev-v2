import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo-template';
import { AlbumsPhotosService } from '../albums-photos.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  photos: Photo[];
  id: number;

  constructor(private photosService: AlbumsPhotosService,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.photosService.getPosts(this.id).subscribe((photo) => {
        this.photos = photo;
      });
    })
  }
}

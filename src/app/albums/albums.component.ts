import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { filter, flatMap, groupBy, mergeMap, toArray, mergeAll, merge, map, concatAll, combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums = [];

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.albumService
      .getAlbums()
      .pipe(
        // Emit each album.
        mergeMap(a => a),
        // Group albums by id.
        groupBy(a => {
          return a.albumId
        }),
        // Transform it back to an array.
        mergeMap(group => group.pipe(toArray())),
      ).subscribe(
        al => {
          // It's been called 100 times, because there're 100 albums. 
          // I need to merge it so I can reverse (get the latest) it and slice it.
          this.albums = al.reverse().slice(0,3)
        },
        error => console.log("Error")
      );
  }

}

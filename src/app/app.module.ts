import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumService } from './services/album.service';
import { HttpModule } from '@angular/http';

const appRoutes = [
  { 
    path:'albums',
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }

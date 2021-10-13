import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

  @Input() // receive values from parent component's template html
  movieList: Array<any> = [];

}
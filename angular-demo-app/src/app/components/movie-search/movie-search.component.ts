import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';

const baseUrl = 'http://omdbapi.com/?apikey=aa9e49f';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  searchText: string = '';
  apikey: string = 'aa9e49f';
  movies: any[] = [];
  page = 1;

  // constructors for any component in angular is a placeholder for receiving dependencies.
  // if the dependency does not exist, angular will create an object, and all its dependencies and then
  // injects the same to your constructor. If it already exists, same is used. Hence the injectables are singleton.
  constructor(private httpClient: HttpClient) { }

  fetchMovies() {
    if (!this.searchText) return;
    let url = `${baseUrl}&s=${this.searchText}`
    this.httpClient
      .get(url)
      .subscribe(resp => this.movies = resp['Search']);
    // 3 callback methods as params - (1) recd subscription (2) encountered an error (3) end of subscription
  }

  loadMore() {
    this.page++;
    let url = `${baseUrl}&s=${this.searchText}&page=${this.page}`;
    this.httpClient
      .get(url)
      .subscribe(resp => this.movies.push(...resp['Search']));
  }
}

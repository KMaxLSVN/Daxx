import { Component } from "@angular/core";

import {
  MovieItemViewModel,
  MovieReadViewModel,
} from "../../imdb-movie/models";
import { ImdbMovieService } from "../../imdb-movie/services";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
})
export class MainLayoutComponent {
  public movies: Array<MovieItemViewModel> = [];
  public isSearchSubmitted = false;
  constructor(private readonly apiService: ImdbMovieService) {}

  public handleOnSearch(query: string): void {
    this.isSearchSubmitted = true;

    this.apiService.getByTitle(query).subscribe(
      (res: MovieReadViewModel) => {
        console.log(res);
        this.movies = res.items;
      },
      (err) => {
        console.log(err);
        this.movies = [];
      }
    );
  }
}

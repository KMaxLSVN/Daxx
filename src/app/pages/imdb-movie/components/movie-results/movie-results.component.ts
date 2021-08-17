import { Component, Input } from "@angular/core";

import { MovieItemViewModel } from "../../models";

@Component({
  selector: "app-movie-results",
  templateUrl: "./movie-results.component.html",
  styleUrls: ["./movie-results.component.scss"],
})
export class MovieResultsComponent {
  @Input() item: MovieItemViewModel = new MovieItemViewModel();
}

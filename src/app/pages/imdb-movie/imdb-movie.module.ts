import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MovieLookupComponent } from "./components/movie-lookup/movie-lookup.component";
import { MovieResultsComponent } from './components/movie-results/movie-results.component';

@NgModule({
  declarations: [MovieLookupComponent, MovieResultsComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [MovieLookupComponent, MovieResultsComponent],
})
export class ImdbMovieModule {}

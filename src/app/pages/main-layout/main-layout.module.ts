import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ImdbMovieModule } from "../imdb-movie/imdb-movie.module";
import { MainLayoutComponent } from "./components/main-layout.component";

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, ImdbMovieModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}

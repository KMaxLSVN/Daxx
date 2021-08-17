import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {
  MovieItemDto,
  MovieItemViewModel,
  MovieReadFailDto,
  MovieReadSuccessDto,
  MovieReadViewModel,
} from "../models";

type ResponseType = MovieReadSuccessDto | MovieReadFailDto;

@Injectable({
  providedIn: "root",
})
export class ImdbMovieService {
  constructor(private readonly http: HttpClient) {}

  public getByTitle(title: string): Observable<MovieReadViewModel> {
    const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=3427f14e";
    const movieTitleKey = "s";
    const movieTypeKey = "type";
    const pageNumber = "page";
    let params: HttpParams = new HttpParams()
      .set(movieTitleKey, title)
      .set(movieTypeKey, "movie")
      .set(pageNumber, "1");

    return this.http.get<ResponseType>(apiUrl, { params }).pipe(
      map((res: ResponseType) => {
        if (res.Response === "True") {
          return {
            items: this.mapToViewModel((res as MovieReadSuccessDto).Search),
          };
        } else {
          throw throwError((res as MovieReadFailDto).Error);
        }
      })
    );
  }

  private mapToViewModel(res: Array<MovieItemDto>): Array<MovieItemViewModel> {
    return res.map((item: MovieItemDto) => {
      return {
        title: item.Title,
        type: item.Type,
        year: item.Year,
      };
    });
  }
}

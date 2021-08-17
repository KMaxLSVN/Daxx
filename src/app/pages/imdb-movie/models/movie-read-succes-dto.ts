import { MovieItemDto } from "./movie-item-dto";
import { MovieReadBaseDto } from "./movie-read-base-dto";

export class MovieReadSuccessDto extends MovieReadBaseDto {
  Search: Array<MovieItemDto>;
  totalResults: string;
}

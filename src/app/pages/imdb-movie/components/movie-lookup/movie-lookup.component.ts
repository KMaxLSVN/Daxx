import { Component, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-movie-lookup",
  templateUrl: "./movie-lookup.component.html",
  styleUrls: ["./movie-lookup.component.scss"],
})
export class MovieLookupComponent {
  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    search: new FormControl("", Validators.required),
  });

  public onSumbit(): void {
    const searchControl: AbstractControl = this.form.get("search");
    if (searchControl.value && this.form.valid) {
      this.onSearch.emit(searchControl.value);
    }
  }
}

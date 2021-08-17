import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainLayoutModule } from "./pages/main-layout/main-layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MainLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

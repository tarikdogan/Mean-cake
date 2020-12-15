import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CakeCreateComponent } from "./components/cake-create/cake-create.component";
import { CakeListComponent } from "./components/cake-list/cake-list.component";
import { CakeEditComponent } from "./components/cake-edit/cake-edit.component";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "./service/api.service";

@NgModule({
  declarations: [
    AppComponent,
    CakeCreateComponent,
    CakeListComponent,
    CakeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

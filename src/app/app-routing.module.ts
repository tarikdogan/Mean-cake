import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CakeCreateComponent } from "./components/cake-create/cake-create.component";
import { CakeListComponent } from "./components/cake-list/cake-list.component";
import { CakeEditComponent } from "./components/cake-edit/cake-edit.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "create" },
  { path: "create", component: CakeCreateComponent },
  { path: "edit/:id", component: CakeEditComponent },
  { path: "list", component: CakeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

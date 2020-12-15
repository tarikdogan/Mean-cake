import { Cake } from "../../model/Cake";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-cake-edit",
  templateUrl: "./cake-edit.component.html",
  styleUrls: ["./cake-edit.component.css"],
})
export class CakeEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  cakeData: Cake[];
  yumFactor: any = ["1", "2", "3", "4", "5"];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.update();
    let id = this.actRoute.snapshot.paramMap.get("id");
    this.get(id);
    this.editForm = this.fb.group({
      name: ["", [Validators.required]],
      comment: ["", [Validators.required]],
      imageUrl: ["", [Validators.required]],
      yumFactor: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    });
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get("yumFactor").setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  get(id) {
    this.apiService.get(id).subscribe((data) => {
      this.editForm.setValue({
        name: data["name"],
        comment: data["comment"],
        imageUrl: data["imageUrl"],
        yumFactor: data["yumFactor"],
      });
    });
  }

  update() {
    this.editForm = this.fb.group({
      name: ["", [Validators.required]],
      comment: ["", [Validators.required]],
      imageUrl: ["", [Validators.required]],
      yumFactor: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm("Are you sure?")) {
        let id = this.actRoute.snapshot.paramMap.get("id");
        this.apiService.update(id, this.editForm.value).subscribe(
          (res) => {
            this.router.navigateByUrl("/list");
            console.log("Content updated successfully!");
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}

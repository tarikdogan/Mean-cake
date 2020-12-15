import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-cake-create",
  templateUrl: "./cake-create.component.html",
  styleUrls: ["./cake-create.component.css"],
})
export class CakeCreateComponent implements OnInit {
  submitted = false;
  cakeForm: FormGroup;
  yumFactor: any = ["1", "2", "3", "4", "5"];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.cakeForm = this.fb.group({
      name: ["", [Validators.required]],
      comment: ["", [Validators.required]],
      imageUrl: ["", [Validators.required]],
      yumFactor: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    });
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.cakeForm.get("designation").setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.cakeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.cakeForm.valid) {
      return false;
    } else {
      this.apiService.create(this.cakeForm.value).subscribe(
        (res) => {
          console.log("Cake successfully created!");
          this.ngZone.run(() => this.router.navigateByUrl("/list"));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}

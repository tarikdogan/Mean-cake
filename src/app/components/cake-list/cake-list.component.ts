import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

@Component({
  selector: "app-cake-list",
  templateUrl: "./cake-list.component.html",
  styleUrls: ["./cake-list.component.css"],
})
export class CakeListComponent implements OnInit {
  Cake: any = [];

  constructor(private apiService: ApiService) {
    this.read();
  }

  ngOnInit() {}

  read() {
    this.apiService.getAll().subscribe((data) => {
      this.Cake = data;
    });
  }

  remove(item, index) {
    if (window.confirm("Are you sure?")) {
      this.apiService.delete(item._id).subscribe((data) => {
        this.read();
      });
    }
  }
}

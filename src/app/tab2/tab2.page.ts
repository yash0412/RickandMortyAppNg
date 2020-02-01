import { Component, OnInit, ViewChild } from "@angular/core";
import { Data } from "../Details";
import { Router } from "@angular/router";

import { IonSearchbar } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  page: number;
  locations: any[];
  loading: boolean = false;
  totalData: number;
  showSearch: boolean = false;
  infiniteScroll: boolean = true;

  @ViewChild("autofocus", { static: false }) searchbar: IonSearchbar;

  constructor(private router: Router) {
    this.locations = [];
    this.totalData = Data.locations.length;
    this.page = 0;
  }
  ngOnInit() {
    // console.log(this.page);
    this.page = this.page + 1;
    if (this.totalData > this.locations.length) {
      const newLocations = Data.locations.slice(0, this.page * 20);
      this.locations = newLocations;
    }
  }
  getLocationData = (event?) => {
    this.page = this.page + 1;
    if (this.totalData > this.locations.length) {
      const newLocations = Data.locations.slice(0, this.page * 20);
      setTimeout(() => {
        this.locations = newLocations;
        if (event) event.target.complete();
      }, 1000);
    } else {
      if (event) event.target.disabled = true;
    }
  };
  switchTab = event => {
    switch (event.direction) {
      case 2:
        this.router.navigate(["/tabs/tab3"]);
        break;
      case 4:
        this.router.navigate(["/tabs/tab1"]);
        break;
      default:
        break;
    }
  };

  search = e => {
    this.loading = true;
    const val = e.target.value;
    if (val.length) {
      this.infiniteScroll = false;
      const regex = new RegExp(e.target.value, "i");
      this.locations = Data.locations.filter(_ => {
        // console.log(_.name.match(regex));
        return _.name.match(regex);
      });
      this.loading = false;
    } else {
      this.page = 0;
      this.infiniteScroll = true;
      this.loading = false;
      this.getLocationData();
    }
  };

  toggleSearch = () => {
    if (this.showSearch) {
      this.page = 0;
      this.infiniteScroll = true;
      this.loading = false;
      this.getLocationData();
    } else {
      setTimeout(() => this.searchbar.setFocus(), 100);
    }
    this.showSearch = !this.showSearch;
  };
}

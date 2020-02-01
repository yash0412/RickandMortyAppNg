import { Component, OnInit, ViewChild } from "@angular/core";
import { Data } from "../Details";
import { Router } from "@angular/router";

import { IonSearchbar } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  page: number;
  characters: any[];
  loading: boolean = false;
  totalData: number;
  showSearch: boolean = false;
  infiniteScroll: boolean = true;

  @ViewChild("autofocus", { static: false }) searchbar: IonSearchbar;

  constructor(private router: Router) {
    this.characters = [];
    this.totalData = Data.characters.length;
    this.page = 0;
  }
  ngOnInit() {
    this.page = this.page + 1;
    if (this.totalData > this.characters.length) {
      const newCharacters = Data.characters.slice(0, this.page * 20);
      this.characters = newCharacters;
    }
  }
  getCharacterData = (event?) => {
    this.page = this.page + 1;
    if (this.totalData > this.characters.length) {
      const newCharacters = Data.characters.slice(0, this.page * 20);
      setTimeout(() => {
        this.characters = newCharacters;
        if (event) event.target.complete();
      }, 1000);
    } else {
      if (event) event.target.disabled = true;
    }
  };
  switchTab = event => {
    switch (event.direction) {
      case 2:
        this.router.navigate(["/tabs/tab2"]);
        break;
      case 4:
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
      this.characters = Data.characters.filter(_ => {
        // console.log(_.name.match(regex));
        return _.name.match(regex);
      });
      this.loading = false;
    } else {
      this.page = 0;
      this.infiniteScroll = true;
      this.loading = false;
      this.getCharacterData();
    }
  };
  toggleSearch = () => {
    if (this.showSearch) {
      this.page = 0;
      this.infiniteScroll = true;
      this.loading = false;
      this.getCharacterData();
    } else {
      setTimeout(() => this.searchbar.setFocus(), 100);
    }
    this.showSearch = !this.showSearch;
  };
}

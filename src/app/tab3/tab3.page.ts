import { Component, OnInit, ViewChild } from "@angular/core";
import { Data } from "../Details";
import { Router } from "@angular/router";

import { IonSearchbar } from "@ionic/angular";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {
  page: number;
  episodes: any[];
  loading: boolean = false;
  totalData: number;
  showSearch: boolean = false;
  infiniteScroll: boolean = true;

  @ViewChild("autofocus", { static: false }) searchbar: IonSearchbar;

  constructor(private router: Router) {
    this.episodes = [];
    this.totalData = Data.episodes.length;
    this.page = 0;
  }
  ngOnInit() {
    // console.log(this.page);
    this.page = this.page + 1;
    if (this.totalData > (this.page - 1) * 20) {
      const newEpisodes = Data.episodes.slice(0, this.page * 20);
      this.episodes = newEpisodes;
    }
  }
  getEpisodesData = (event?) => {
    this.page = this.page + 1;
    if (this.totalData > (this.page - 1) * 20) {
      const newEpisodes = Data.episodes.slice(0, this.page * 20);
      setTimeout(() => {
        this.episodes = newEpisodes;
        if (event) event.target.complete();
      }, 1000);
    } else {
      if (event) event.target.disabled = true;
    }
  };
  switchTab = event => {
    switch (event.direction) {
      case 2:
        break;
      case 4:
        this.router.navigate(["/tabs/tab2"]);
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
      this.episodes = Data.episodes.filter(_ => {
        // console.log(_.name.match(regex));
        return _.name.match(regex);
      });
      this.loading = false;
    } else {
      this.page = 0;
      this.infiniteScroll = true;
      this.loading = false;
      this.getEpisodesData();
    }
  };

  toggleSearch = () => {
    if (this.showSearch) {
      this.page = 0;
      this.infiniteScroll = true;
      this.loading = false;
      this.getEpisodesData();
    } else {
      setTimeout(() => this.searchbar.setFocus(), 100);
    }
    this.showSearch = !this.showSearch;
  };
}

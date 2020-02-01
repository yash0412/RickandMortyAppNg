import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EpisodeModalComponent } from "./episode-modal/episode-modal.component";

@Component({
  selector: "app-episode-item",
  templateUrl: "./episode-item.component.html",
  styleUrls: ["./episode-item.component.scss"]
})
export class EpisodeItemComponent implements OnInit {
  @Input() episode;
  constructor(private modalController: ModalController) {
    // console.log(this.location);
  }

  ngOnInit() {
    // console.log(this.location);
  }
  async showModal() {
    const modal = await this.modalController.create({
      component: EpisodeModalComponent,
      componentProps: { episode: this.episode }
    });
    return await modal.present();
  }
}

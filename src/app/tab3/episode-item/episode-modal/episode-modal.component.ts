import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Data } from "../../../Details";
@Component({
  selector: "app-episode-modal",
  templateUrl: "./episode-modal.component.html",
  styleUrls: ["./episode-modal.component.scss"]
})
export class EpisodeModalComponent implements OnInit {
  @Input() episode;
  constructor(private modalCtrl: ModalController) {}
  characters;
  ngOnInit() {
    this.characters = Data.characters.filter(_ =>
      this.episode.characters.includes(
        "https://rickandmortyapi.com/api/character/" + _.id
      )
    );
  }

  hideModal = () => {
    this.modalCtrl.dismiss();
  };
}

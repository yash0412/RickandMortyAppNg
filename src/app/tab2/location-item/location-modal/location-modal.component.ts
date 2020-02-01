import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Data } from "../../../Details";
@Component({
  selector: "app-location-modal",
  templateUrl: "./location-modal.component.html",
  styleUrls: ["./location-modal.component.scss"]
})
export class LocationModalComponent implements OnInit {
  @Input() location;
  constructor(private modalCtrl: ModalController) {}
  residents;
  ngOnInit() {
    this.residents = Data.characters.filter(_ =>
      this.location.residents.includes(
        "https://rickandmortyapi.com/api/character/" + _.id
      )
    );
  }

  hideModal = () => {
    this.modalCtrl.dismiss();
  };
}

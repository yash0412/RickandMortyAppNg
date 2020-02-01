import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-character-modal",
  templateUrl: "./character-modal.component.html",
  styleUrls: ["./character-modal.component.scss"]
})
export class CharacterModalComponent implements OnInit {
  @Input() character;
  @Input() color;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  hideModal = () => {
    this.modalCtrl.dismiss();
  };
}

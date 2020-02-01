import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CharacterModalComponent } from "./character-modal/character-modal.component";

@Component({
  selector: "app-character-item",
  templateUrl: "./character-item.component.html",
  styleUrls: ["./character-item.component.scss"]
})
export class CharacterItemComponent implements OnInit {
  @Input() character;
  @Input() context;
  color;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.color =
      this.character.status === "Alive"
        ? "success"
        : this.character.status === "Dead"
        ? "danger"
        : "warning";
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: CharacterModalComponent,
      componentProps: { character: this.character, color: this.color }
    });
    return await modal.present();
  }
}

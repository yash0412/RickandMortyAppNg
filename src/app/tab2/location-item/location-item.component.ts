import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LocationModalComponent } from "./location-modal/location-modal.component";
@Component({
  selector: "app-location-item",
  templateUrl: "./location-item.component.html",
  styleUrls: ["./location-item.component.scss"]
})
export class LocationItemComponent implements OnInit {
  @Input() location;
  constructor(private modalController: ModalController) {
    // console.log(this.location);
  }

  ngOnInit() {
    // console.log(this.location);
  }
  async showModal() {
    const modal = await this.modalController.create({
      component: LocationModalComponent,
      componentProps: { location: this.location }
    });
    return await modal.present();
  }
}

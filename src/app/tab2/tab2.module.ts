import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { CharacterModalComponent } from "../shared/character-item/character-modal/character-modal.component";
import { SharedModule } from "../shared/shared.module";
import { LocationItemComponent } from "./location-item/location-item.component";
import { LocationModalComponent } from "./location-item/location-modal/location-modal.component";
import { Tab2Page } from "./tab2.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab2Page }])
  ],
  declarations: [Tab2Page, LocationItemComponent, LocationModalComponent],
  entryComponents: [LocationModalComponent, CharacterModalComponent]
})
export class Tab2PageModule {}

import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { CharacterModalComponent } from "../shared/character-item/character-modal/character-modal.component";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [Tab1Page],
  entryComponents: [CharacterModalComponent]
})
export class Tab1PageModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterItemComponent } from "./character-item/character-item.component";
import { CharacterModalComponent } from "./character-item/character-modal/character-modal.component";
import { IonicModule } from "@ionic/angular";
@NgModule({
  declarations: [CharacterItemComponent, CharacterModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [CharacterItemComponent]
})
export class SharedModule {}

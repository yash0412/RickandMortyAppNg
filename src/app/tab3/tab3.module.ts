import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab3Page } from "./tab3.page";

import { EpisodeItemComponent } from "./episode-item/episode-item.component";
import { EpisodeModalComponent } from "./episode-item/episode-modal/episode-modal.component";
import { SeasonEpisodePipe } from "./season-episode.pipe";
import { CharacterModalComponent } from "../shared/character-item/character-modal/character-modal.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: "", component: Tab3Page }])
  ],
  declarations: [
    Tab3Page,
    EpisodeItemComponent,
    EpisodeModalComponent,
    SeasonEpisodePipe
  ],
  entryComponents: [EpisodeModalComponent, CharacterModalComponent]
})
export class Tab3PageModule {}

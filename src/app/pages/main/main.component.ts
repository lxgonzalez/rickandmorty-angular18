import {ChangeDetectionStrategy, Component, inject, signal, viewChild} from '@angular/core';
import {CharactersService} from "../../service/characters.service";
import {Character, CharacterInfo} from "../../models/character.model";
import {firstValueFrom, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {CardCharacterComponent} from "../../components/card-character/card-character.component";
import {PaginationComponent} from "../../components/pagination/pagination.component";
import {CharacterModalComponent} from "../character-modal/character-modal.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AsyncPipe,
    CardCharacterComponent,
    PaginationComponent,
    CharacterModalComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  characterInfo: Record<string, Character> = {}


  private serviceCharacter = inject(CharactersService)
  characters$: Observable<Character[]> = this.serviceCharacter.getCharacters(1)

  modal = viewChild.required(CharacterModalComponent);

  async makeApiCall(url: string) {
    let character = await firstValueFrom(
      this.serviceCharacter.getCharacterInformation(url))

    this.characterInfo[character.id] = character
  }

  async makeApiCallCharacters(page: number) {
    this.characters$ = this.serviceCharacter.getCharacters(page)
  }

  openModal(character: Character) {
    this.modal().open(character);
  }

}

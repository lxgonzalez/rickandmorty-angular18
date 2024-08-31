import {ChangeDetectionStrategy, Component, ElementRef, input, OnInit, output, viewChild} from '@angular/core';
import {Character} from "../../models/character.model";
import {DatePipe, JsonPipe, NgOptimizedImage} from "@angular/common";
import {CharacterModalComponent} from "../../pages/character-information/character-modal.component";
import {MainComponent} from "../../pages/main/main.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [
    NgOptimizedImage,
    JsonPipe,
    DatePipe,
    CharacterModalComponent
  ],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCharacterComponent implements OnInit {
  character = input.required<Character>()

  loaded = output<string>()
  characterInfo = input<Character>()

  sendCharacter = output<Character>()

  modal = viewChild.required(MainComponent);

  ngOnInit() {
    // this.loaded.emit(this.character().url)
  }

  openModal(character: Character) {
    this.sendCharacter.emit(character)
  }

}

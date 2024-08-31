import {ChangeDetectionStrategy, Component, ElementRef, signal, viewChild} from '@angular/core';
import {Character, Gender, Location, Origin} from "../../models/character.model";
import {JsonPipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [
    JsonPipe,
    NgOptimizedImage
  ],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterModalComponent {

  characterInformation = signal<Character>({
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: Gender.UNKNOWN,
    origin: new Origin(),
    location: new Location(),
    image: "",
    episode: [],
    url: "",
    created: ""
  })

  modal = viewChild.required<ElementRef>('myModal');

  open(character: Character) {
    this.characterInformation.set(character)
    this.modal().nativeElement.style.display = 'block';
  }

  close() {
    this.modal().nativeElement.style.display = 'none';
  }
}

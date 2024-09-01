import {ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import {Character, Gender, Location, Origin} from "../../models/character.model";
import {JsonPipe, NgOptimizedImage} from "@angular/common";
import {PaginationComponent} from "../../components/pagination/pagination.component";
import {CharactersService} from "../../service/characters.service";

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [
    JsonPipe,
    PaginationComponent,
    NgOptimizedImage
  ],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterModalComponent {
  characterService = inject(CharactersService)

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
    this.characterInformation.set(character);
    const modalElement = this.modal().nativeElement;

    modalElement.style.display = 'block';

    setTimeout(() => {
      modalElement.classList.add('open');
    }, 10);
  }

  close() {
    const modalElement = this.modal().nativeElement;
    modalElement.classList.remove('open');

    setTimeout(() => {
      modalElement.style.display = 'none';
    }, 300);
  }

  makeApiCallById(id: number){
    this.characterService.getCharacterById(id).subscribe((data) => {
      this.characterInformation.set(data)
    })
  }
}

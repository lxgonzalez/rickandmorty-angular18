import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Character, CharacterInfo} from "../models/character.model";
import {CharacterAdapter} from "../adapters/character.adapter";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private mainUrl: string = 'https://rickandmortyapi.com/api/';
  private characterUrl: string = `${this.mainUrl}character/`;


  constructor(private http: HttpClient) { }

  getCharacters(page: number):Observable<Character []>{
    return this.http.get<CharacterInfo>(`${this.characterUrl}?page=${page}`).pipe(
      map((result: CharacterInfo)=> CharacterAdapter(result)));
  }

  getCharacterInformation(url:string):Observable<Character>{
    return this.http.get<Character>(url);
  }

  getCharacterById(id: number):Observable<Character>{
    return this.http.get<Character>(`${this.characterUrl}${id}`);
  }

}

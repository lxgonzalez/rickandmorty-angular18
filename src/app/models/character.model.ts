import {Info} from "./api.model";

export enum Gender {
  "MALE" = "Male",
  "FEMALE" = "Female",
  "GENDERLESS" = "Genderless",
  "UNKNOWN" = "unknown"
}

export class CharacterInfo{
  info: Info
  results: Character[]
  count: number
}

export class LinkedElement{
  name: string
  link: string
}

export class Origin extends LinkedElement{}
export class Location extends LinkedElement{}

export class Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: Gender
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

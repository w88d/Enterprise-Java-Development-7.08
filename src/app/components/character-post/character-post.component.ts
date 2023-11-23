import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-post',
  templateUrl: './character-post.component.html',
  styleUrls: ['./character-post.component.css']
})
export class CharacterPostComponent {
  name: string;
  occupation: string;
  debt: boolean;
  weapon: string;
  char: {name: string, occupation: string, debt: boolean, weapon: string}

  constructor(private characterService: CharacterService){
    this.name = "";
    this.occupation = "";
    this.debt = false;
    this.weapon = "";
    this.char = {name: this.name, occupation: this.occupation, debt: this.debt, weapon: this.weapon}
  }

  isDisabled(): boolean {
    return (
      this.name === "" ||
      this.occupation === "" ||
      this.debt === undefined ||
      this.weapon === ""
    );
  }


  createChar(){
    this.char = {name: this.name, occupation: this.occupation, debt: this.debt, weapon: this.weapon}
    this.characterService.postCharacter(this.char).subscribe(response=>{ this.char })
  }

}

import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent {
  name: string;
  occupation: string;
  debt: boolean;
  weapon: string;
  char: {name: string, occupation: string, debt: boolean, weapon: string}

  @Input()
  id: number;

  constructor(private characterService: CharacterService){
    this.name = "";
    this.occupation = "";
    this.debt = false;
    this.weapon = "";
    this.char = {name: this.name, occupation: this.occupation, debt: this.debt, weapon: this.weapon};
    this.id = 0;

  }

  ngOnInit(): void{
    this.characterService.getCharacterById(this.id).subscribe(response=>{ 
      this.name = response.name;
      this.occupation = response.occupation;
      this.debt = response.debt;
      this.weapon = response.weapon; 
    })
  }


  putChar(id: number){
    
    this.char.name = this.name;
    this.char.occupation = this.occupation;
    this.char.debt = this.debt;
    this.char.weapon = this.weapon;

    this.characterService.putCharacter(id, this.char).subscribe(response=>{

    this.char;
      
    })
  }
}

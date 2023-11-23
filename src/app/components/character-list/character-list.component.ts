import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  characters: any[] = [];
  data: any;
  id: number;
  name: string;
  occupation: string;
   debt: boolean;
   weapon: string;
   
  

  constructor(private characterService: CharacterService) {
    this.id=0;
    this.name="";
    this.occupation="";
    this.debt=false;
    this.weapon="";
  
   }

  onDeleteCharacter(id: number) {
    this.characterService.deleteCharacter(id).subscribe({
      next: (data) => {
        alert("Course deleted successfully");
  
      },
      error: (e) => {
        console.log(e);        
      }
    });
    this.characters.splice(id, 1);
    
  }


  getCharacter(): void {
    this.characterService.getCharacter().subscribe({
      next: (data) => {
        console.log(data);
        this.characters = data; 
        console.log('Received data:', data);
        this.characters = data.map((item: any) => ({ ...item, showDetails: false }));
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  postCharcter(id: number): void {
    const body = {
      
      name:"Devaid",
      occupation:"Jedi Knight",
      debt:false,
      weapon:"Lightsaber",
      id:3
    };

    this.characterService.postCharacter(body).subscribe({
      next: (data) => {
        alert("Character posted successfully");
        this.getCharacter;
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  putCharacter(): void {
    const body = {
      
      name:"Devaid",
      occupation:"Knight",
      debt:false,
      weapon:"Lightsaber",
      id:3
    };

    this.characterService.putCharacter(this.id, body).subscribe({
      next: (data) => {
        alert("Course modified successfully");
        this.getCharacter();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
 
  showDetails(character: Character): void {
    (character as any).showDetails = !(character as any).showDetails;
  }
  getCharacterById(characterId: number) {
    this.characterService.getCharacterById(characterId).subscribe({
      next: (data) => {
        console.log(data);
        this.characters = data;
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
  getIndex(i: number): void {
    console.log(this.data[i].id);
  }
}



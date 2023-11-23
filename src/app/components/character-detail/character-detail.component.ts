import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent  implements OnInit{
  @Input('ocuppationProp')
  ocuppation: any;

  @Input('weaponProp')
  weapon: any;

  @Input()
  id: number; 

  @Output()
  deleteCharacterEvent = new EventEmitter<number>(); 

  character: any;

  constructor(private characterService: CharacterService) 
  {
    this.id = 0;
    this.deleteCharacterEvent = new EventEmitter<number>();
   }

  ngOnInit() {
    this.getCharacterById(this.id);
  }

  deleteCharacter(id : number): void {
        this.deleteCharacterEvent.emit(id);

  }

  getCharacterById(id: number) {
    this.characterService.getCharacterById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.character = data;
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { PokecardService } from '../../services/pokecard.service';
@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  pokecardService: any;
 
    name : string 
    urlId: number
    urlImg : string
    urlNam: string
    urlType: string 
    urlType2: string
    urlHeight: string
    urlHp: number
    urlAtt: number
    urlDef: number
    urlSpAtt: number
    urlSpDef:number
    urlSpeed: number
    constructor(private PokecardService : PokecardService){
  
    }
    ngOnInit(): void {
      
    }
    search(){
      this.PokecardService.getPokemon(this.name).subscribe((data:any)=>{
        this.urlImg = data.sprites.front_default
        this.urlHeight = data.height
        this.urlNam = data.name
        this.urlId = data.id
        
        if(data.types.length < 2 ){
          this.urlType2 = ""
          this.urlType = data.types[0].type.name
        }else{
        this.urlType = data.types[0].type.name
        this.urlType2 = data.types[1].type.name
        }
        this.urlHp = data.stats[0].base_stat
        this.urlAtt = data.stats[1].base_stat
        this.urlDef = data.stats[2].base_stat
        this.urlSpAtt = data.stats[3].base_stat
        this.urlSpDef= data.stats[4].base_stat
        this.urlSpeed = data.stats[5].base_stat
  
        
        console.log(data);
      })
    }
  }

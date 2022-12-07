import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
constructor(){}
ngOnInit(): void {
    const pokedex = document.getElementById('pokedex');

    let colorsArr = new Map([
      ["fire", "#FCC1A2"],
      ["fairy", "#FDD7E4"],
      ["grass", "#AEECB8"],
      ["bug", "#C2E184"],
      ["flying", "#E1D8FF"],
      ["ground", "#EAD7B7"],
      ["ghost", "ghostwhite"],
      ["ice", "#dcffff"],
      ["electric", "lemonchiffon"],
      ["water", "#A6D9FF"],
      ["poison", "#B3C1A5"],
      ["steel", "#EFEEEC"],
      ["dark", "#9C9AC3"],
      ["fighting", "#D1A3A3"],
      ["dragon", "thistle"],
      ["psychic", "#7BA6DD"],
      ["rock", "#BEAE9D"],
      ["normal", "#FFADAD"]
    ]);
    
    const getPokemon = () => {
    
      const promises = [];
      for(let i = 1;i <= 151;i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
      }
    
        Promise.all(promises).then((results) => {
          const Pokecolor: any[] = [];
           
          const Otherpokecolor: any[] = [];
          
          const PokeColors = results.map((result) => (result.types.map((poketype: { type: { name: any; }; }) => poketype.type.name)));
          
          PokeColors.forEach((c) => (
            Pokecolor.push(
              colorsArr.get(c[0].toString())
            )
          ));
          PokeColors.forEach((c) => (
            Otherpokecolor.push(
              colorsArr.get(typeof c[1] !== 'undefined'? c[1].toString():c[0].toString())
            )
          ));
          
          const pokemon = results.map((result) => ({
            name: result.name[0].toUpperCase() + result.name.slice(1),
            id: result.id,
            types: result.types.map((poketype: { type: { name: any; }; }) => poketype.type.name).join(', '),
            color: Pokecolor[result.id-1],
            secondColor : Otherpokecolor[result.id-1]
          }));
          
          displayPokemon(pokemon);
        })
    };
    
    //https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png
    
    const displayPokemon = (pokemon: any[]) => {
    
      const pokedexHtml = pokemon.map( (poke: { color: any; secondColor: any; id: any; name: any; types: any; }) =>
        `<div class="card" style="  
        background-color: brown;
        border-radius : 20px;
        display: flex;
        flex-direction : column;
        padding: 10px;
        margin : 20px;
        text-align :center;
        box-shadow :0 3px 15px rgba(100,100,100,0.5);
        width: 300px;
        height: 150px;
        display : flex;
        flex-wrap : wrap;
        align-items : space-between;
        justify-content : center;
        box-shadow :0 3px 15px rgba(100,100,100,0.5);background-image:linear-gradient(to bottom, ${poke.color},${poke.secondColor});">
          <div class="poke-img"style="  
          background : white;
          border: 1px solid red;
          border-radius: 20%;
          width :120px;
          height : 120px;">
          <img 
          style="  width : 100px;  margin-top : 20px;
          max-width : 150px;
          "src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png"/>
          </div>
          <div class="poke-info" style="">
            <span style="color: blue;" class="poke-no">${poke.id}</span>
            <h3 style="color: black;">${poke.name}</h3>
            <p style="color: #370785">Type: ${poke.types}</p>
          </div>
        </div>`
        ).join('');
      pokedex!.innerHTML = pokedexHtml;
    }
    
    getPokemon();
    
}}
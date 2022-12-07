import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokeportada',
  templateUrl: './pokeportada.component.html',
  styleUrls: ['./pokeportada.component.scss']
})
export class PokeportadaComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
    const container = document.getElementById("container");
    const pkmNumber = 151;
     
     const fetchPkm = async () => {
         for (let i = 1; i <= pkmNumber; i++) {
             await getPkm(i);
         }
     }
   
     async function getPkm(id: number) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      createPokemonCard(pokemon);
    }
   
     fetchPkm();
   
     function createPokemonCard(pokemon: { name: any; id: any; types: { type: { name: any; }; }[]; }) {
         let pokemonEl = document.createElement("div");
         pokemonEl.classList.add("pokemon");
         const pokeInnerHtml = `
         <div class="pkm-card">${pokemon.name}
         <img class="pkm-images" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
         <div class="type">Type: ${pokemon.types[0].type.name}</div>
         </div>
         `;
         pokemonEl.innerHTML = pokeInnerHtml;
         container!.appendChild(pokemonEl);
     }
   
   
}}

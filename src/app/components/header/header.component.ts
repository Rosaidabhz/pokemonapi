import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    var boton = document.getElementById('boton')
    var nav = document.getElementById('nav')

  boton!
  .addEventListener('click', function(){
  nav!
  .classList.toggle('activo')

    console.log(boton)
    console.log(nav)
  })
 }
}

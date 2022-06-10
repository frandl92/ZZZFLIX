import { HeroInterface } from './../../models/mediaInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
public heroInfo: HeroInterface;
  constructor() { 
    this.heroInfo = {
      title: "Mis 5 pelis / series prefes",
      media: [{
        src: "../assets/images/Comedia/ted2.webp",
        alt:"ted 2",
      },
      {
        src: "../assets/images/Comedia/dictador.webp",
        alt:"dictador",
      },
      {
        src: "../assets/images/Comedia/laterminal.webp",
        alt:"la terminal",
      },
      {
        src: "../assets/images/Comedia/cazafantasmas.webp",
        alt:"caza fantasmas",
      },
      {
        src: "../assets/images/Comedia/juerga.webp",
        alt:"juerga",
      }]
    }
  }

  ngOnInit(): void {
  }

}

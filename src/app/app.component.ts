import { MediaInterface } from './models/mediaInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pelis: MediaInterface = {
    title: "Accion",
    media: [{
      src: "../assets/images/Accion/worldwarz.webp",
      alt: "apostol"
    },
    {
      src: "../assets/images/Accion/heat.webp",
      alt: "Heat"
    },
    {
      src: "../assets/images/Accion/jackreacher.webp",
      alt: "Jack Reacher"
    },
    {
      src: "../assets/images/Accion/renacido.webp",
      alt: "Renacido"
    },
    {
      src: "../assets/images/Accion/misionimposiblenacion.webp",
      alt: "Mision Imposible"
    }]
    
  }
  public sciFi: MediaInterface = {
    title: "Sci-fi",
    media: [{
      src: "../assets/images/Sci-fi/6dia.webp",
      alt: "apostol"
    },
    {
      src: "../assets/images/Sci-fi/12monos.webp",
      alt: "Heat"
    },
    {
      src: "../assets/images/Sci-fi/afterearth.webp",
      alt: "Jack Reacher"
    },
    {
      src: "../assets/images/Sci-fi/watchmen.webp",
      alt: "Renacido"
    },
    {
      src: "../assets/images/Sci-fi/core.webp",
      alt: "Mision Imposible"
    }]
    
  }
}


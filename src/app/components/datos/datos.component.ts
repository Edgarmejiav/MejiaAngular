import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  nombre: String = "Edgar";
  email: String = "emejiav16_1@unc.edu.pe";
  direccion: String = "JR. real paz 187";
  telefono: String = "987654321";
  socialMedia: Array<socialMedia> = [];

  constructor() {   
    var social1 = new socialMedia("Twiter", "https://twitter.com/edgarm_v", "fab fa-twitter-square");
    var social2 = new  socialMedia("Facebook", "https://www.facebook.com/edgarmejiav/", "fab fa-facebook-square");
    var social3 = new  socialMedia("Instagram", "https://www.instagram.com/edgarmejiav/", "fab fa-instagram");

    this.socialMedia.push(social1);
    this.socialMedia.push(social2);
    this.socialMedia.push(social3);

  }

  ngOnInit(): void {
  }

}

class socialMedia { 
  name: String;
  url: String;
  icon: String;
  constructor( name: String,
    url: String,
    icon: String,) {
    this.name = name;
    this.url = url;
    this.icon = icon;
    };
}
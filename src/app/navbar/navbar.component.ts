import { Component, OnInit } from '@angular/core';
import { Iimages } from "./Images";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class  NavbarComponent implements OnInit {

  images : Iimages | undefined;

  constructor() { }

  ngOnInit(): void {
    this.images = {
      "img": "../logo/logo.png"
    }

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {
      public title: string;
      public subtitle: string;
      public email: string;



  constructor() {
      this.title = 'Alexandre Cormier';
      this.subtitle = 'Développeur Web Full Stack';
      this.email = 'alexcordev@gmail.com';
  }
  ngOnInit() {
  }
 }

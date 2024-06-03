import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunite-bourse',
  templateUrl: './opportunite-bourse.component.html',
  styleUrls: ['./opportunite-bourse.component.css']
})
export class OpportuniteBourseComponent implements OnInit {

  data: any[] = []; 
  constructor() { }

  ngOnInit(): void {
        this.data=[
          {
            id:"1",
            nom: "Bourse d'etude",
            image: "assets/images/infrastructure.png",
            montant: 2000,
            delais: "15 avril 2024"
          },
          {
            id:"2",
            nom: "Bourse de recherche",
            image: "assets/images/infrastructure.png",
            montant: 2000,
            delais: "15 avril 2024"
          },
          {
            id:"3",
            nom: "Bourses d'excellence",
            image: "assets/images/infrastructure.png",
            montant: 2000,
            delais: "15 avril 2024"          },
          {
            id:"4",
            nom: "Bourses interne",
            image: "assets/images/infrastructure.png",
            montant: 2000,
            delais: "15 avril 2024"          },
          {
            id:"5",
            nom: "Bourses externe",
            image: "assets/images/infrastructure.png",
            montant: 2000,
            delais: "15 avril 2024"          },
          {
            id:"6",
            nom: "Bourses specifiques",
            image: "assets/images/infrastructure.png",
            montant: 2000,
            delais: "15 avril 2024"          }
        ]
  }

}

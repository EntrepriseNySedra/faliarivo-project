import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourse-distincations',
  templateUrl: './bourse-distincations.component.html',
  styleUrls: ['./bourse-distincations.component.css']
})
export class BourseDistincationsComponent implements OnInit {

  data: any[] = []; 
  constructor() { }

  ngOnInit(): void {
        this.data=[
          {
            id:"1",
            nom: "bourses ou distincations 1",
            image: "assets/images/prix.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"2",
            nom: "bourses ou distincations  2",
            image: "assets/images/prix.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"3",
            nom: "bourses ou distincations  3",
            image: "assets/images/prix.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"4",
            nom: "bourses ou distincations  4",
            image: "assets/images/prix.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"5",
            nom: "bourses ou distincations  5",
            image: "assets/images/prix.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"6",
            nom: "bourses ou distincations  6",
            image: "assets/images/prix.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          }
        ]
  }

}

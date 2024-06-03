import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-storie',
  templateUrl: './success-storie.component.html',
  styleUrls: ['./success-storie.component.css']
})
export class SuccessStorieComponent implements OnInit {
  data: any[] = []; 
  constructor() { }

  ngOnInit(): void {
        this.data=[
          {
            id:"1",
            nom: "Jeanne Rakoto",
            image: "assets/images/successstorie.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"2",
            nom: "Paul Dubois",
            image: "assets/images/successstorie.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"3",
            nom: "Jeanne Rakoto",
            image: "assets/images/successstorie.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"4",
            nom: "Paul Dubois",
            image: "assets/images/successstorie.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"5",
            nom: "Jeanne Rakoto",
            image: "assets/images/successstorie.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"6",
            nom: "Paul Dubois",
            image: "assets/images/successstorie.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          }
        ]
  }

}

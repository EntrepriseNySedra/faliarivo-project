import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {

  data: any[] = []; 
  constructor() { }

  ngOnInit(): void {
        this.data=[
          {
            id:"1",
            nom: "Prix 1",
            image: "assets/images/prix.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"2",
            nom: "Prix 2",
            image: "assets/images/prix.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"3",
            nom: "Prix 3",
            image: "assets/images/prix.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"4",
            nom: "Prix 4",
            image: "assets/images/prix.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"5",
            nom: "Prix 5",
            image: "assets/images/prix.png",
            poste: "Directrice Générale",
            commentaire: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"6",
            nom: "Prix 6",
            image: "assets/images/prix.png",
            poste: "Client fidèle",
            commentaire: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          }
        ]
  }

}

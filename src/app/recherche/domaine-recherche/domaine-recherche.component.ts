import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domaine-recherche',
  templateUrl: './domaine-recherche.component.html',
  styleUrls: ['./domaine-recherche.component.css']
})
export class DomaineRechercheComponent implements OnInit {

  data: any[] = []; 
  constructor() { }

  ngOnInit(): void {
        this.data=[
          {
            id:"1",
            nom: "Jeanne Rakoto",
            image: "assets/images/infrastructure.png",
            champexpetise: "Directrice Générale",
            Thematiques: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"2",
            nom: "Paul Dubois",
            image: "assets/images/infrastructure.png",
            champexpetise: "Client fidèle",
            Thematiques: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"3",
            nom: "Jeanne Rakoto",
            image: "assets/images/infrastructure.png",
            champexpetise: "Directrice Générale",
            Thematiques: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"4",
            nom: "Paul Dubois",
            image: "assets/images/infrastructure.png",
            champexpetise: "Client fidèle",
            Thematiques: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          },
          {
            id:"5",
            nom: "Jeanne Rakoto",
            image: "assets/images/infrastructure.png",
            champexpetise: "Directrice Générale",
            Thematiques: "Cette success story est le fruit du travail acharné et de l'engagement de toute notre équipe. Nous sommes fiers de notre parcours et nous sommes déterminés à continuer d'innover et de contribuer au développement durable de notre industrie."
          },
          {
            id:"6",
            nom: "Paul Dubois",
            image: "assets/images/infrastructure.png",
            champexpetise: "Client fidèle",
            Thematiques: "Le Groupe Savoureux incarne la qualité et l'authenticité. Leurs produits sont devenus indispensables dans ma cuisine. C'est une entreprise dont je suis fier de soutenir le succès."
          }
        ]
  }

}

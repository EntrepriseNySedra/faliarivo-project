import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subvention-recherche',
  templateUrl: './subvention-recherche.component.html',
  styleUrls: ['./subvention-recherche.component.css']
})
export class SubventionRechercheComponent implements OnInit {

 
  data: any[] = []; 
  constructor() { }

  ngOnInit(): void {
        this.data=[
          {
            "id": "1",
            "organismederecherche": "Institut de Psychiatrie",
            "image": "assets/images/infrastructure.png",
            "partenariat": "Fondation pour la Recherche sur la Santé Mentale",
            "critere": "Innovation en thérapies cognitives",
            "procedurecandidature": "Formulaire en ligne",
            "avantage": "Bourse de recherche"
          },          
          {
            "id": "2",
            "organismederecherche": "Laboratoire de Génie Civil",
            "image": "assets/images/infrastructure.png",
            "partenariat": "Ministère des Transports",
            "critere": "Développement durable des infrastructures",
            "procedurecandidature": "Appel à projets annuel",
            "avantage": "Financement de projet"
          }
          ,
          {
            "id": "3",
            "organismederecherche": "Institut de Biologie Marine",
            "image": "assets/images/infrastructure.png",
            "partenariat": "Fondation pour la Protection des Océans",
            "critere": "Étude de la biodiversité marine",
            "procedurecandidature": "Dépôt de dossier par courrier",
            "avantage": "Soutien financier"
          }
          ,
          {
            "id": "4",
            "organismederecherche": "Centre de Recherche sur les Énergies Renouvelables",
            "image": "assets/images/infrastructure.png",
            "partenariat": "Compagnie d'énergie verte",
            "critere": "Innovation technologique",
            "procedurecandidature": "Évaluation par comité d'experts",
            "avantage": "Subvention de recherche"
          }
          ,
          {
            "id": "5",
            "organismederecherche": "Laboratoire d'Intelligence Artificielle",
            "image": "assets/images/infrastructure.png",
            "partenariat": "Société de technologie de l'information",
            "critere": "Avancées dans l'apprentissage automatique",
            "procedurecandidature": "Présentation de proposition détaillée",
            "avantage": "Financement de projet de recherche"
          },
          {
            "id": "6",
            "organismederecherche": "Institut de Recherche sur les Maladies Infectieuses",
            "image": "assets/images/infrastructure.png",
            "partenariat": "Organisation Mondiale de la Santé",
            "critere": "Recherche sur les vaccins",
            "procedurecandidature": "Demande de subvention en ligne",
            "avantage": "Bourse de recherche"
          }
          
        ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  dataEvent: any[] = [];
  dataActus: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.dataEvent= [
      {
        "type": "evenement",
        "imageEvent": "assets/images/event.png",
        "titre": "Rencontres avec des scientifiques et des experts",
        "date": "2024-05-10",
        "lieu": "Localisation à venir",
        "description": "Des rencontres passionnantes avec des scientifiques et des experts de divers domaines pour discuter des dernières avancées et des défis actuels dans leurs domaines respectifs.",
        "organisateur": "Organisateur à venir",
        "inscription": {
          "lien": "https://exemple.com/inscription",
          "date_limite": "2024-05-05"
        }
      },
      {
        "type": "evenement",
        "imageEvent": "assets/images/event.png",
        "titre": "Formations transversales",
        "date": "2024-06-20",
        "lieu": "Localisation à venir",
        "description": "Des formations transversales couvrant divers sujets tels que la méthodologie de la thèse, les langues, et les logiciels de traitement de données.",
        "organisateur": "Organisateur à venir",
        "inscription": {
          "lien": "https://exemple.com/inscription",
          "date_limite": "2024-06-10"
        }
      },
      {
        "type": "evenement",
        "imageEvent": "assets/images/event.png",
        "titre": "Ateliers de réflexion et formation thématique par spécialité",
        "date": "2024-07-15",
        "lieu": "Localisation à venir",
        "description": "Des ateliers de réflexion et de formation thématique organisés par spécialité pour approfondir les connaissances et les compétences dans des domaines spécifiques.",
        "organisateur": "Organisateur à venir",
        "inscription": {
          "lien": "https://exemple.com/inscription",
          "date_limite": "2024-07-05"
        }
      },
      {
        "type": "evenement",
        "imageEvent": "assets/images/event.png",
        "titre": "Colloques, conférences, séminaires, stages",
        "date": "2024-08-05",
        "lieu": "Localisation à venir",
        "description": "Des événements tels que des colloques, des conférences, des séminaires et des stages pour favoriser les échanges académiques et professionnels.",
        "organisateur": "Organisateur à venir",
        "inscription": {
          "lien": "https://exemple.com/inscription",
          "date_limite": "2024-07-30"
        }
      },
      {
        "type": "evenement",
        "imageEvent": "assets/images/event.png",
        "titre": "Interventions et témoignages de professionnels",
        "date": "2024-09-10",
        "lieu": "Localisation à venir",
        "description": "Des interventions et des témoignages de professionnels de divers secteurs, offrant des perspectives pratiques et des conseils sur leurs domaines d'expertise.",
        "organisateur": "Organisateur à venir",
        "inscription": {
          "lien": "https://exemple.com/inscription",
          "date_limite": "2024-09-05"
        }
      },
      {
        "type": "evenement",
        "imageEvent": "assets/images/event.png",
        "titre": "Échanges scientifiques et intellectuels entre les doctorants",
        "date": "2024-10-20",
        "lieu": "Localisation à venir",
        "description": "Des échanges scientifiques et intellectuels entre les doctorants, comprenant des communications, des présentations d'état d'avancement de thèse et des discussions sur des sujets pertinents.",
        "organisateur": "Organisateur à venir",
        "inscription": {
          "lien": "https://exemple.com/inscription",
          "date_limite": "2024-10-10"
        }
      },
      {
        "type": "evenement",
        "imageEvent": "assets/images/event.png",
        "titre": "Journées scientifiques et doctoriales",
        "date": "2024-11-20",
        "lieu": "Localisation à venir",
        "description": "Des journées scientifiques et doctoriales dédiées à la présentation et à la discussion des recherches menées par les doctorants, ainsi qu'à la collaboration et au réseautage entre pairs.",
        "organisateur": "Organisateur à venir",
        "inscription": {
          "lien": "https://exemple.com/inscription",
          "date_limite": "2024-11-10"
        }
      }
    ]
    
  }

}

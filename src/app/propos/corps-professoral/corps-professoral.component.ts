import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corps-professoral',
  templateUrl: './corps-professoral.component.html',
  styleUrls: ['./corps-professoral.component.css']
})
export class CorpsProfessoralComponent implements OnInit {

  constructor() { }

  dommainesexpertise: any[] = []; 
  realisationacademique: any[] = []; 
  ngOnInit(): void {
    this.dommainesexpertise = [
      {
        'id': '1',
        'nom': 'Licence en Informatique',
        'description': 'Un programme de premier cycle axé sur les fondamentaux de l\'informatique.',
        'imageCorps': 'assets/images/professoral.png',
        'details': 'Détails sur la Licence en Informatique.'
      },
      {
        'id': '2',
        'nom': 'Master en Génie Mécanique',
        'description': 'Un programme de deuxième cycle se concentrant sur la conception et l\'ingénierie mécanique avancée.',
        'imageCorps': 'assets/images/professoral.png',
        'details': 'Détails sur le Master en Génie Mécanique.'
      },
      {
        'id': '3',
        'nom': 'Doctorat en Biologie Moléculaire',
        'description': 'Un programme de troisième cycle centré sur la recherche avancée en biologie moléculaire.',
        'imageCorps': 'assets/images/professoral.png',
        'details': 'Détails sur le Doctorat en Biologie Moléculaire.'
      }
    ];
    this.realisationacademique = [
      {
        'id': '1',
        'nom': 'Realisations 1',
        'description': 'Un programme de premier cycle axé sur les fondamentaux de l\'informatique.',
        'imageCorps': 'assets/images/professoral.png',
        'details': 'Détails sur la Licence en Informatique.'
      },
      {
        'id': '2',
        'nom': 'Realisations 2',
        'description': 'Un programme de deuxième cycle se concentrant sur la conception et l\'ingénierie mécanique avancée.',
        'imageCorps': 'assets/images/professoral.png',
        'details': 'Détails sur le Master en Génie Mécanique.'
      },
      {
        'id': '3',
        'nom': 'Realisations 3',
        'description': 'Un programme de troisième cycle centré sur la recherche avancée en biologie moléculaire.',
        'imageCorps': 'assets/images/professoral.png',
        'details': 'Détails sur le Doctorat en Biologie Moléculaire.'
      }
    ];

  }

}

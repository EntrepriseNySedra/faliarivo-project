import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenariat',
  templateUrl: './partenariat.component.html',
  styleUrls: ['./partenariat.component.css']
})
export class PartenariatComponent implements OnInit {

  constructor() { }
  data: any[] = []; 
  ngOnInit(): void {
    this.data = [
      {
        'id': '1',
        'nom': 'Partenariat',
        'description': 'Un programme de premier cycle axé sur les fondamentaux de l\'informatique.',
        'imagePartenaire': 'assets/images/partenariat.png',
        'details': 'Détails sur la Licence en Informatique.'
      },
      {
        'id': '2',
        'nom': 'Partenariat',
        'description': 'Un programme de deuxième cycle se concentrant sur la conception et l\'ingénierie mécanique avancée.',
        'imagePartenaire': 'assets/images/partenariat.png',
        'details': 'Détails sur le Master en Génie Mécanique.'
      },
      {
        'id': '3',
        'nom': 'Partenariat',
        'description': 'Un programme de troisième cycle centré sur la recherche avancée en biologie moléculaire.',
        'imagePartenaire': 'assets/images/partenariat.png',
        'details': 'Détails sur le Doctorat en Biologie Moléculaire.'
      },
      
    ];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        'id': '1',
        'nom': 'Licence en Informatique',
        'description': 'Un programme de premier cycle axé sur les fondamentaux de l\'informatique.',
        'imageProgrammes': 'lien_vers_image_1.jpg',
        'curriculum': 'Licence_Informatique_Curriculum.pdf'
      },
      {
        'id': '2',
        'nom': 'Master en Génie Mécanique',
        'description': 'Un programme de deuxième cycle se concentrant sur la conception et l\'ingénierie mécanique avancée.',
        'imageProgrammes': 'lien_vers_image_2.jpg',
        'curriculum': 'Master_Genie_Mecanique_Curriculum.pdf'
      },
      {
        'id': '3',
        'nom': 'Doctorat en Biologie Moléculaire',
        'description': 'Un programme de troisième cycle centré sur la recherche avancée en biologie moléculaire.',
        'imageProgrammes': 'lien_vers_image_3.jpg',
        'curriculum': 'Doctorat_Biologie_Moleculaire_Curriculum.pdf'
      },
      {
        'id': '4',
        'nom': 'Licence en Sciences Économiques',
        'description': 'Un programme de premier cycle axé sur l\'étude des phénomènes économiques.',
        'imageProgrammes': 'lien_vers_image_4.jpg',
        'curriculum': 'Licence_Sciences_Economiques_Curriculum.pdf'
      },
      {
        'id': '5',
        'nom': 'Master en Finance Quantitative',
        'description': 'Un programme de deuxième cycle se concentrant sur l\'analyse financière avancée.',
        'imageProgrammes': 'lien_vers_image_5.jpg',
        'curriculum': 'Master_Finance_Quantitative_Curriculum.pdf'
      }
    ];
  }

}

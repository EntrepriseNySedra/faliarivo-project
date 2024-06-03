import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-les-programmes',
  templateUrl: './les-programmes.component.html',
  styleUrls: ['./les-programmes.component.css']
})
export class LesProgrammesComponent implements OnInit {

  data: any[] = [];

  selectedProgram: any = {}; 
  
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        "id": "1",
        "nom": "Doctorat en Économie",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés de l'économie.",
        "imageProgrammes": "/assets/images/economie.png",
        "appercu": {
          "id": "1",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés de l'économie.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés de l'économie."
        },
        "curriculum": {
          "id": "1",
          "nom": "Curriculum avancé en Économie",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "1",
          "critere": "Diplôme de deuxième cycle en économie ou dans un domaine connexe",
          "prerequisAcademique": "Master en économie ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      },
      {
        "id": "2",
        "nom": "Doctorat en Management",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés du management.",
        "imageProgrammes": "/assets/images/management.png",
        "appercu": {
          "id": "2",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés du management.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés du management."
        },
        "curriculum": {
          "id": "2",
          "nom": "Curriculum avancé en Management",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "2",
          "critere": "Diplôme de deuxième cycle en management ou dans un domaine connexe",
          "prerequisAcademique": "Master en management ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      },
      {
        "id": "3",
        "nom": "Doctorat en Population et Développement",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés de la population et du développement.",
        "imageProgrammes": "/assets/images/population_developpement.png",
        "appercu": {
          "id": "3",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés de la population et du développement.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés de la population et du développement."
        },
        "curriculum": {
          "id": "3",
          "nom": "Curriculum avancé en Population et Développement",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "3",
          "critere": "Diplôme de deuxième cycle en développement, démographie ou dans un domaine connexe",
          "prerequisAcademique": "Master en développement, démographie ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      },
      {
        "id": "4",
        "nom": "Doctorat en Droit et Sciences Politiques",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés du droit et des sciences politiques.",
        "imageProgrammes": "/assets/images/droit_sciences_politiques.png",
        "appercu": {
          "id": "4",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés du droit et des sciences politiques.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés du droit et des sciences politiques."
        },
        "curriculum": {
          "id": "4",
          "nom": "Curriculum avancé en Droit et Sciences Politiques",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "4",
          "critere": "Diplôme de deuxième cycle en droit, sciences politiques ou dans un domaine connexe",
          "prerequisAcademique": "Master en droit, sciences politiques ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      },
      {
        "id": "5",
        "nom": "Doctorat en Psychologie",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés de la psychologie.",
        "imageProgrammes": "/assets/images/psychologie.png",
        "appercu": {
          "id": "5",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés de la psychologie.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés de la psychologie."
        },
        "curriculum": {
          "id": "5",
          "nom": "Curriculum avancé en Psychologie",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "5",
          "critere": "Diplôme de deuxième cycle en psychologie ou dans un domaine connexe",
          "prerequisAcademique": "Master en psychologie ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      },
      {
        "id": "6",
        "nom": "Doctorat en Anthropologie",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés de l'anthropologie.",
        "imageProgrammes": "/assets/images/anthropologie.png",
        "appercu": {
          "id": "6",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés de l'anthropologie.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés de l'anthropologie."
        },
        "curriculum": {
          "id": "6",
          "nom": "Curriculum avancé en Anthropologie",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "6",
          "critere": "Diplôme de deuxième cycle en anthropologie ou dans un domaine connexe",
          "prerequisAcademique": "Master en anthropologie ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      },
      {
        "id": "7",
        "nom": "Doctorat en Théologie",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés de la théologie.",
        "imageProgrammes": "/assets/images/theologie.png",
        "appercu": {
          "id": "7",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés de la théologie.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés de la théologie."
        },
        "curriculum": {
          "id": "7",
          "nom": "Curriculum avancé en Théologie",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "7",
          "critere": "Diplôme de deuxième cycle en théologie ou dans un domaine connexe",
          "prerequisAcademique": "Master en théologie ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      },
      {
        "id": "8",
        "nom": "Doctorat en Philosophie",
        "description": "Un programme de troisième cycle se concentrant sur les aspects avancés de la philosophie.",
        "imageProgrammes": "/assets/images/philosophie.png",
        "appercu": {
          "id": "8",
          "objectif": "Un programme de troisième cycle se concentrant sur les aspects avancés de la philosophie.",
          "competences": "Un programme de troisième cycle se concentrant sur les aspects avancés de la philosophie."
        },
        "curriculum": {
          "id": "8",
          "nom": "Curriculum avancé en Philosophie",
          "etapes": "etapes",
          "exigencesThese": "exigences"
        },
        "admission": {
          "id": "8",
          "critere": "Diplôme de deuxième cycle en philosophie ou dans un domaine connexe",
          "prerequisAcademique": "Master en philosophie ou équivalent",
          "recommandations": "Lettre de motivation, lettres de recommandation"
        }
      }
    ]
    ;
    if (this.data.length > 0) {
      this.selectedProgram = this.data[0];
    }
  }

  selectProgram(program: any) {
    this.selectedProgram = program;
  }

}

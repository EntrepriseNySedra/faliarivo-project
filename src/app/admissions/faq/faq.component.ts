import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faqList = [
    { question: 'Quels sont les critères d\'admission à l\'école doctorale de l\'UCM ?', answer: 'Les critères d\'admission varient selon le programme de doctorat. En général, les candidats doivent avoir un diplôme de master pertinent et soumettre un projet de recherche. Des critères supplémentaires peuvent inclure des examens d\'admission et des entretiens.' },
    { question: 'Quels sont les débouchés professionnels après l\'obtention d\'un doctorat à l\'UCM ?', answer: 'Les diplômés d\'un doctorat de l\'UCM peuvent poursuivre une carrière académique en tant que chercheurs ou enseignants universitaires. Ils peuvent également trouver des opportunités dans l\'industrie, les organismes gouvernementaux ou les organisations internationales.' },
    { question: 'Comment puis-je postuler à un programme de doctorat à l\'UCM ?', answer: 'Les procédures de candidature varient selon le programme de doctorat. En général, vous devez remplir un formulaire de candidature en ligne, soumettre des documents académiques, des lettres de recommandation et un projet de recherche.' },
    { question: 'Quels sont les domaines de recherche couverts par l\'école doctorale de l\'UCM ?', answer: 'L\'école doctorale de l\'UCM couvre un large éventail de domaines de recherche, y compris les sciences naturelles, les sciences sociales, les sciences humaines, l\'ingénierie, les arts et bien plus encore. Vous pouvez consulter la liste des programmes de doctorat pour plus d\'informations.' },
    { question: 'Existe-t-il des opportunités de financement pour les étudiants en doctorat à l\'UCM ?', answer: 'Oui, l\'UCM propose différentes options de financement pour les étudiants en doctorat, y compris des bourses, des assistanats de recherche et des contrats de travail avec des laboratoires de recherche ou des entreprises.' },
    { question: 'Quels sont les avantages d\'étudier à l\'UCM pour un doctorat ?', answer: 'L\'UCM offre un environnement de recherche de haute qualité avec des installations de pointe et un corps professoral de renommée internationale. En plus de cela, les étudiants en doctorat bénéficient d\'un soutien académique et professionnel, d\'opportunités de réseautage et de collaborations internationales.' }
  ];
  
  
  newQuestion: string = '';


  submitQuestion() {
    // Vérifier si la question existe déjà dans la base de données
    const existingQuestion = this.faqList.find(faq => faq.question.toLowerCase() === this.newQuestion.toLowerCase());

    if (existingQuestion) {
      alert('Votre question existe déjà dans la FAQ : ' + existingQuestion.answer);
    } else {
      // Logique pour enregistrer la nouvelle question dans votre base de données (à implémenter)
      alert('Votre question a été enregistrée pour traitement ultérieur.');
    }

    // Réinitialiser le champ de saisie
    this.newQuestion = '';
  }
 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-recherche',
  templateUrl: './projet-recherche.component.html',
  styleUrls: ['./projet-recherche.component.css']
})
export class ProjetRechercheComponent implements OnInit {

  data: any[] = []; 
  constructor() { }

  ngOnInit(): void {
        this.data=[
          {
            id: "1",
            nom: "Jeanne Rakoto",
            image: "assets/images/infrastructure.png",
            domaine: "Directrice Générale",
            contribution: "Jeanne Rakoto a joué un rôle crucial dans la définition de la vision stratégique de notre entreprise et dans la prise de décisions importantes pour son développement.",
            methodologie: "Elle a utilisé une approche axée sur les données et la collaboration pour développer des stratégies efficaces et des plans d'action concrets.",
            objectifs: "Ses principaux objectifs étaient de renforcer la position de l'entreprise sur le marché, d'améliorer sa rentabilité et de promouvoir l'innovation.",
            thematiques: "Jeanne Rakoto est une leader passionnée par l'innovation et l'excellence. Elle a axé son travail sur le développement durable, la responsabilité sociale des entreprises et l'optimisation des processus."
          },
          {
            id: "2",
            nom: "Paul Dubois",
            image: "assets/images/infrastructure.png",
            domaine: "Directeur Financier",
            contribution: "Paul Dubois a apporté une expertise financière solide et une gestion rigoureuse des ressources de l'entreprise.",
            methodologie: "Il a mis en place des systèmes de contrôle efficaces et des pratiques de gestion des risques pour assurer la stabilité financière de l'entreprise.",
            objectifs: "Ses objectifs étaient de maximiser les revenus, d'optimiser les coûts et d'assurer la conformité aux réglementations financières.",
            thematiques: "Paul Dubois est un leader pragmatique qui accorde une grande importance à la transparence, à l'intégrité et à la responsabilité financière."
          },
          {
            id: "3",
            nom: "Marie Lefevre",
            image: "assets/images/infrastructure.png",
            domaine: "Directrice Médicale",
            contribution: "Marie Lefevre a dirigé avec succès plusieurs projets de recherche médicale et a contribué à l'avancement des pratiques médicales.",
            methodologie: "Elle a utilisé une approche multidisciplinaire et une collaboration étroite avec des experts pour mener des études cliniques de haute qualité.",
            objectifs: "Ses objectifs étaient d'améliorer les soins de santé, de découvrir de nouveaux traitements et de promouvoir la santé publique.",
            thematiques: "Marie Lefevre est passionnée par l'innovation en médecine et s'engage à fournir des soins de qualité et accessibles à tous."
          },
          {
            id: "4",
            nom: "Thomas Martin",
            image: "assets/images/infrastructure.png",
            domaine: "Directeur de l'Éducation",
            contribution: "Thomas Martin a mis en place des programmes éducatifs innovants et a encouragé l'excellence académique chez les étudiants et le personnel.",
            methodologie: "Il a favorisé une approche pédagogique centrée sur l'apprenant et a utilisé la technologie pour améliorer l'enseignement et l'apprentissage.",
            objectifs: "Ses objectifs étaient d'offrir une éducation de qualité, de favoriser l'égalité des chances et de préparer les étudiants à réussir dans un monde en évolution rapide.",
            thematiques: "Thomas Martin croit fermement au pouvoir de l'éducation pour transformer les vies et contribuer au progrès social et économique."
          },
          {
            id: "5",
            nom: "Sophie Laurent",
            image: "assets/images/infrastructure.png",
            domaine: "Directrice de la Technologie",
            contribution: "Sophie Laurent a dirigé la transformation numérique de l'entreprise et a supervisé le développement de solutions technologiques innovantes.",
            methodologie: "Elle a adopté une approche agile et collaborative pour accélérer le développement de produits et répondre aux besoins changeants du marché.",
            objectifs: "Ses objectifs étaient de stimuler l'innovation, d'optimiser les processus et de renforcer la compétitivité de l'entreprise.",
            thematiques: "Sophie Laurent est une leader visionnaire qui croit au potentiel transformateur de la technologie pour créer de la valeur et stimuler la croissance."
          },
          {
            id: "6",
            nom: "Ahmed Diop",
            image: "assets/images/infrastructure.png",
            domaine: "Directeur de l'Industrie",
            contribution: "Ahmed Diop a dirigé l'optimisation des opérations industrielles et a amélioré l'efficacité et la qualité des processus de production.",
            methodologie: "Il a utilisé des méthodes d'amélioration continue et des outils de gestion de la qualité pour réduire les coûts et augmenter la productivité.",
            objectifs: "Ses objectifs étaient d'atteindre des normes élevées de performance opérationnelle, de réduire l'empreinte environnementale et de garantir la sécurité des travailleurs.",
            thematiques: "Ahmed Diop est un leader déterminé à promouvoir l'innovation, la durabilité et l'excellence dans l'industrie."
          }
        ]
  }

}

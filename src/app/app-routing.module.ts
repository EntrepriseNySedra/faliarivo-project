import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProposComponent } from './propos/propos.component'; 
import { ProgrammesComponent } from './programmes/programmes.component'; 
import { RechercheComponent } from './recherche/recherche.component'; 
import { BourseComponent } from './bourse/bourse.component'; 
import { VieetudianteComponent } from './vieetudiante/vieetudiante.component'; 
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactComponent } from './contact/contact.component';
import { HistoireComponent } from './propos/histoire/histoire.component';
import { VisionComponent } from './propos/vision/vision.component';
import { CorpsProfessoralComponent } from './propos/corps-professoral/corps-professoral.component';
import { InfrastructureRechercheComponent } from './propos/infrastructure-recherche/infrastructure-recherche.component';
import { PartenariatComponent } from './propos/partenariat/partenariat.component';
import { RealisationDistinctionsComponent } from './propos/realisation-distinctions/realisation-distinctions.component';
import { EngagementsComponent } from './propos/engagements/engagements.component';
import { ValeurCultureComponent } from './propos/valeur-culture/valeur-culture.component';
import { SuccessStorieComponent } from './propos/success-storie/success-storie.component';
import { LesProgrammesComponent } from './programmes/les-programmes/les-programmes.component';
import { CurriculumComponent } from './programmes/curriculum/curriculum.component';
import { ExigencesAdmissionsComponent } from './programmes/exigences-admissions/exigences-admissions.component';
import { EncadrementCorpsComponent } from './programmes/encadrement-corps/encadrement-corps.component';
import { OpportunitesRechercheComponent } from './programmes/opportunites-recherche/opportunites-recherche.component';
import { PerspectiveCarriereComponent } from './programmes/perspective-carriere/perspective-carriere.component';
import { ProcessusCandidatureComponent } from './programmes/processus-candidature/processus-candidature.component';
import { OpportuniteFinancementComponent } from './programmes/opportunite-financement/opportunite-financement.component';
import { EvenementComponent } from './acceuil/evenement/evenement.component';
import { PrixComponent } from './propos/realisation-distinctions/prix/prix.component';
import { BourseDistincationsComponent } from './propos/realisation-distinctions/bourse-distincations/bourse-distincations.component';
import { DomaineRechercheComponent } from './recherche/domaine-recherche/domaine-recherche.component';
import { ProjetRechercheComponent } from './recherche/projet-recherche/projet-recherche.component';
import { RessourceRechercheComponent } from './recherche/ressource-recherche/ressource-recherche.component';
import { PublicationRealisationComponent } from './recherche/publication-realisation/publication-realisation.component';
import { OpportuniteBourseComponent } from './bourse/opportunite-bourse/opportunite-bourse.component';
import { SubventionRechercheComponent } from './bourse/subvention-recherche/subvention-recherche.component';
import { FaqComponent } from './admissions/faq/faq.component';
import { ContacteComponent } from './contacte/contacte.component';

const routes: Routes = [
  {
    path: '', // Route vide pour la page d'accueil
    component: AcceuilComponent,
    pathMatch: 'full',
  },
  {
    path: 'a-propos', 
    component: ProposComponent, 
    pathMatch: 'full',
  },
  {
    path: 'programmes', 
    component: ProgrammesComponent, 
    pathMatch: 'full',
  },
  {
    path: 'recherche', 
    component: RechercheComponent, 
    pathMatch: 'full',
  },
  {
    path: 'bourse-financement', 
    component: BourseComponent, 
    pathMatch: 'full',
  },
  {
    path: 'vie-etudiante', 
    component: VieetudianteComponent, 
    pathMatch: 'full',
  },
  {
    path: 'admissions', 
    component: AdmissionsComponent, 
    pathMatch: 'full',
  },
  {
    path: 'contact-us', 
    component: ContactComponent, 
    pathMatch: 'full',
  },
  {
    path: 'notre-histoire', 
    component: HistoireComponent, 
    pathMatch: 'full',
  },
  {
    path: 'vision', 
    component: VisionComponent, 
    pathMatch: 'full',
  },
  {
    path: 'corps-professoral', 
    component: CorpsProfessoralComponent, 
    pathMatch: 'full',
  },
  {
    path: 'infrastructure-de-recherche', 
    component: InfrastructureRechercheComponent, 
    pathMatch: 'full',
  },
  {
    path: 'partenariat', 
    component: PartenariatComponent, 
    pathMatch: 'full',
  },
  {
    path: 'realisations', 
    component: RealisationDistinctionsComponent, 
    pathMatch: 'full',
  },
  {
    path: 'engagements', 
    component: EngagementsComponent, 
    pathMatch: 'full',
  },
  {
    path: 'valeuretculture', 
    component: ValeurCultureComponent, 
    pathMatch: 'full',
  },
  {
    path: 'success-stories', 
    component: SuccessStorieComponent, 
    pathMatch: 'full',
  },
  {
    path: 'tous-les-programmes', 
    component: LesProgrammesComponent, 
    pathMatch: 'full',
  },
  {
    path: 'curriculum', 
    component: CurriculumComponent, 
    pathMatch: 'full',
  },
  {
    path: 'exigences-admissions', 
    component: ExigencesAdmissionsComponent, 
    pathMatch: 'full',
  },
  {
    path: 'encadrement-corps--professoral', 
    component: EncadrementCorpsComponent, 
    pathMatch: 'full',
  },
  {
    path: 'opportunite-de-recherche', 
    component: OpportunitesRechercheComponent, 
    pathMatch: 'full',
  },
  {
    path: 'perspective-de-carriere', 
    component: PerspectiveCarriereComponent, 
    pathMatch: 'full',
  },
  {
    path: 'processus-de-candidature', 
    component: ProcessusCandidatureComponent, 
    pathMatch: 'full',
  },
  {
    path: 'opportunite-de-financement', 
    component: OpportuniteFinancementComponent, 
    pathMatch: 'full',
  },
  {
    path: 'evenement', 
    component: EvenementComponent, 
    pathMatch: 'full',
  },
  {
    path: 'prix', 
    component: PrixComponent, 
    pathMatch: 'full',
  },
  {
    path: 'bourses-distincations', 
    component: BourseDistincationsComponent, 
    pathMatch: 'full',
  },
  {
    path: 'domaine-de-recherche', 
    component: DomaineRechercheComponent, 
    pathMatch: 'full',
  },
  {
    path: 'projet-de-recherche', 
    component: ProjetRechercheComponent, 
    pathMatch: 'full',
  },
  {
    path: 'ressources-de-recherche', 
    component: RessourceRechercheComponent, 
    pathMatch: 'full',
  },
  {
    path: 'publication-realisation', 
    component: PublicationRealisationComponent, 
    pathMatch: 'full',
  },
  {
    path: 'opportunite-de-bourse', 
    component: OpportuniteBourseComponent, 
    pathMatch: 'full',
  },
  {
    path: 'subvention-de-recherche', 
    component: SubventionRechercheComponent, 
    pathMatch: 'full',
  },
  {
    path: 'foire-aux-question', 
    component: FaqComponent, 
    pathMatch: 'full',
  },
  {
    path: 'contactez-nous', 
    component: ContacteComponent, 
    pathMatch: 'full',
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

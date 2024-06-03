import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProposComponent } from './propos/propos.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RouterModule } from '@angular/router';
import { BourseComponent } from './bourse/bourse.component';
import { VieetudianteComponent } from './vieetudiante/vieetudiante.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralComponent } from './general/general.component';

import { PopoverModule } from 'ngx-bootstrap/popover';
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
import { ModalModule } from 'ngx-bootstrap/modal';
import { FaqComponent } from './admissions/faq/faq.component';
import { ContacteComponent } from './contacte/contacte.component';
import { SlugifyPipe } from 'pipes/slugify.pipe';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
//import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ProposComponent,
    ProgrammesComponent,
    HeaderComponent,
    FooterComponent,
    RechercheComponent,
    BourseComponent,
    VieetudianteComponent,
    AdmissionsComponent,
    ContactComponent,
    GeneralComponent,
    HistoireComponent,
    VisionComponent,
    CorpsProfessoralComponent,
    InfrastructureRechercheComponent,
    PartenariatComponent,
    RealisationDistinctionsComponent,
    EngagementsComponent,
    ValeurCultureComponent,
    SuccessStorieComponent,
    LesProgrammesComponent,
    CurriculumComponent,
    ExigencesAdmissionsComponent,
    EncadrementCorpsComponent,
    OpportunitesRechercheComponent,
    PerspectiveCarriereComponent,
    ProcessusCandidatureComponent,
    OpportuniteFinancementComponent,
    EvenementComponent,
    PrixComponent,
    BourseDistincationsComponent,
    DomaineRechercheComponent,
    ProjetRechercheComponent,
    RessourceRechercheComponent,
    PublicationRealisationComponent,
    OpportuniteBourseComponent,
    SubventionRechercheComponent,
    FaqComponent,
    ContacteComponent,
    SlugifyPipe
  ],
  imports: [
    ModalModule.forRoot(),
    FormsModule,
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    PopoverModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

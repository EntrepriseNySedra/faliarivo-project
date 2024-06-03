import { Component, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vieetudiante',
  templateUrl: './vieetudiante.component.html',
  styleUrls: ['./vieetudiante.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class VieetudianteComponent {
  @ViewChild('modalContent') modalContent!: TemplateRef<any>;
  @ViewChild('modalServiceSoutien') modalServiceSoutien!: TemplateRef<any>;
  @ViewChild('modalAssociation') modalAssociation!: TemplateRef<any>;
  @ViewChild('modalLogement') modalLogement!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openModalMaterial(): void {
    this.dialog.open(this.modalContent);
  }
  
  closeModalMaterial(): void {
    this.dialog.closeAll();
  }

  openModalServicesSOutien(): void {
    this.dialog.open(this.modalServiceSoutien);
  }
  
  closeModalServicesSOutien(): void {
    this.dialog.closeAll();
  }

  openModalAssociation(): void {
    this.dialog.open(this.modalAssociation);
  }
  
  closeModalAssociation(): void {
    this.dialog.closeAll();
  }

  openModalLogemment(): void {
    this.dialog.open(this.modalLogement);
  }
  
  closeModalLogemment(): void {
    this.dialog.closeAll();
  }

  public afficherContenuSupplementaire: boolean = false;
  
  // Ajoutez une méthode pour basculer la visibilité
  public toggleContenuSupplementaire(): void {
    this.afficherContenuSupplementaire = !this.afficherContenuSupplementaire;
  }
}

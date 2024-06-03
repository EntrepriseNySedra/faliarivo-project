import { Component, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AdmissionsComponent {
    
    @ViewChild('modalContent') modalContent!: TemplateRef<any>;
    @ViewChild('modalEval') modalEval!: TemplateRef<any>;
    @ViewChild('modalAdmissions') modalAdmissions!: TemplateRef<any>;
    @ViewChild('modalLogement') modalLogement!: TemplateRef<any>;
    ngOnInit(): void {}

    constructor(private dialog: MatDialog) {}
  
    openModalMaterial(): void {
      this.dialog.open(this.modalContent);
    }
    
    closeModalMaterial(): void {
      this.dialog.closeAll();
    }
  
    openModalEval(): void {
      this.dialog.open(this.modalEval);
    }
    
    closeModalEval(): void {
      this.dialog.closeAll();
    }
  
    openModalAdmissions(): void {
      this.dialog.open(this.modalAdmissions);
    }
    
    closeModalAdmissions(): void {
      this.dialog.closeAll();
    }
  
    openModalLogemment(): void {
      this.dialog.open(this.modalLogement);
    }
    
    closeModalLogemment(): void {
      this.dialog.closeAll();
    }




}

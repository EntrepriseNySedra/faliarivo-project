import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/config';

interface Laboratoire {
  id: number;
  nom: string;
  description: string;
  image: string;
}

interface EquipementRecherche {
  id: number;
  nom: string;
  description: string;
  image: string;
}

interface Bibliotheque {
  id: number;
  nom: string;
  description: string;
  image: string;
}
interface RessourceRecherche {
  id: number;
  nom: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-infrastructure-recherche',
  templateUrl: './infrastructure-recherche.component.html',
  styleUrls: ['./infrastructure-recherche.component.css']
})
export class InfrastructureRechercheComponent implements OnInit {
  baseUrl = environment.apiUrl;
  //baseUrlEquipement= environment.apiUrlEquipement;
  laboratoires$!: Observable<Laboratoire[]>; 
  equipementRecherche$!: Observable<EquipementRecherche[]>;
  bibliotheque$!: Observable<Bibliotheque[]>;
  ressourceRecherche$!: Observable<RessourceRecherche[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.laboratoires$ = this.getlaboratoires();
    this.equipementRecherche$= this.getEquipements();
    this.bibliotheque$=this.getBibliotheque();
    this.ressourceRecherche$=this.getRessourceRecherche();

    this.laboratoires$.subscribe(data => {
      console.log('laboratoires obtenus :', data); 
    });
    this.equipementRecherche$.subscribe(data2 => {
      console.log('laboratoires obtenus :', data2); 
    });
    this.bibliotheque$.subscribe(data3 => {
      console.log('laboratoires obtenus :', data3); 
    });
    this.ressourceRecherche$.subscribe(data4 => {
      console.log('laboratoires obtenus :', data4); 
    });
  }
  
  // Méthode pour récupérer les laboratoires depuis l'API
  getlaboratoires(): Observable<EquipementRecherche[]> {
    return this.http.get<Laboratoire[]>('http://127.0.0.1:8000/api/laboratoire');
  }

  getEquipements(): Observable<EquipementRecherche[]> {
    return this.http.get<EquipementRecherche[]>('http://127.0.0.1:8000/api/equipement/recherche');
  }
  getBibliotheque(): Observable<Bibliotheque[]> {
    return this.http.get<Bibliotheque[]>('http://127.0.0.1:8000/api/Bibliotheque');
  }
  getRessourceRecherche(): Observable<RessourceRecherche[]> {
    return this.http.get<RessourceRecherche[]>('http://127.0.0.1:8000/api/Ressource/recherche');
  }
  


}



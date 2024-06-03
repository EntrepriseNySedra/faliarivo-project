import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Programme {
  id: number;
  nom: string;
  description: string;
  imageProgrammes: string;
  objectif: string;
}

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {

  programmes$!: Observable<Programme[]>; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.programmes$ = this.getProgrammes();
    this.programmes$.subscribe(data => {
      console.log('Programmes obtenus :', data); 
    });
  }

  // Méthode pour récupérer les programmes depuis l'API
  getProgrammes(): Observable<Programme[]> {
    return this.http.get<Programme[]>('http://127.0.0.1:8000/api/programmes');
  }

}

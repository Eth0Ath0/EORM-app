import { Injectable } from '@angular/core';
//import {ESTUDIANTES} from './estudiantes.json';
import {Estudiante} from './estudiante';
import{Observable} from 'rxjs';
//import{of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
//import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class EstudianteService {
  private url:string='http://localhost:8080/api/estudiantes';
  constructor(private http: HttpClient) { }

  //getEstudiantes(): Observable<Estudiante[]>{
  getEstudiantes(): Observable<Estudiante[]>{
  //return of(ESTUDIANTES);

 return this.http.get<Estudiante[]>(this.url)


  }
}

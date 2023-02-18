import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonajeResponse} from "../Models/PersonajeResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  public getPersonajes(): Observable<PersonajeResponse>{
    const url = 'https://rickandmortyapi.com/api/character';

    return this.http.get<PersonajeResponse>(url);
  }




}

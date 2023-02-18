import {Component, OnInit} from '@angular/core';
import {Result} from "../../Models/PersonajeResponse";
import {PersonajesService} from "../../services/personajes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  personajes : Result[] = [];



  constructor(private personajesService: PersonajesService){

  }

  ngOnInit() {
    this.traerPersonajes();
  }


  private traerPersonajes() {
    this.personajesService.getPersonajes().subscribe({
      next: value => {
        this.personajes = value.results;
        console.log(this.personajes);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {

      }
    });
  }

  update() {

  }

  delete() {
      // Obtener la referencia a la columna que se eliminará


    }

}

import {Component, OnInit} from '@angular/core';
import {PersonajesService} from "../../services/personajes.service";
import {PersonajeResponse} from "../../Models/PersonajeResponse";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personaje-detail',
  templateUrl: './personaje-detail.component.html',
  styleUrls: ['./personaje-detail.component.scss']
})
export class PersonajeDetailComponent implements OnInit{

  personajesList: PersonajeResponse[] = [];

  constructor(private fb: FormBuilder, private personajeService: PersonajesService, private router: Router) {
  }

  ngOnInit(): void {

  }


}
